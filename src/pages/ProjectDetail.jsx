import { Link, useParams } from "react-router-dom";
import ProjectArt from "../components/ProjectArt.jsx";
import { getProject } from "../data/projects.js";

const COL = "w-[88vw] sm:w-[70vw] md:w-[50vw] min-w-[130px]";

function Section({ block, art }) {
  switch (block.type) {
    case "heading":
      return <div className="font-neue mt-6 text-sm">{block.text}</div>;
    case "subheading":
      return (
        <p className="font-neue mt-5 text-sm uppercase text-gray-600 sm:text-base">{block.text}</p>
      );
    case "quote":
      return (
        <p className="font-serif pt-2 text-xl text-black sm:text-2xl md:text-4xl">{block.text}</p>
      );
    case "paragraph":
      return (
        <p className="font-neue pt-2 text-sm sm:text-base md:text-lg">
          {block.text}
          {block.link && (
            <>
              {" "}
              <a
                href={block.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#171717]/40 transition-colors hover:text-[#171717] hover:decoration-[#171717]"
              >
                {block.link.text}
              </a>
            </>
          )}
        </p>
      );
    case "list":
      return (
        <ol className="font-neue list-inside list-decimal pt-2 text-sm sm:text-base md:text-lg">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      );
    case "image": {
      const widthCls = block.full
        ? COL
        : "w-[82%] min-w-[150px] max-w-[560px] sm:w-[64%]";
      return (
        <figure className="flex w-full flex-col items-center">
          <div
            className={`relative mt-2 overflow-hidden rounded-md ${widthCls}`}
            style={{ aspectRatio: block.ratio }}
          >
            {block.src ? (
              <img
                src={block.src}
                alt={block.alt || block.caption || ""}
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <ProjectArt
                art={art}
                mood={block.mood}
                className="h-full w-full"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
              />
            )}
          </div>
          {block.caption && (
            <figcaption className={`font-neue mt-1 text-center text-[0.7em] uppercase text-gray-400 sm:text-[0.8em] ${widthCls}`}>
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    }
    default:
      return null;
  }
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="font-serif text-3xl">project not found</p>
        <Link to="/projects" className="mt-4 font-neue text-sm text-accent hover:underline">
          &lt; back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-white pb-[40px] pt-[50px] sm:pt-[70px]">
      <div className={`flex ${COL} flex-col items-start justify-center`}>
        <div className="fade-up flex w-full flex-col items-start">
          <Link
            to="/projects"
            className="font-neue cursor-pointer text-sm transition-colors duration-200 hover:text-accent"
          >
            &lt; back
          </Link>

          <p className="font-neue mt-2 text-[11px] text-accent sm:text-sm">{project.meta}</p>

          <p className="font-serif mt-2 w-full text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            {project.title}
          </p>

          <div
            className="relative mt-2 w-full min-w-[130px]"
            style={{ aspectRatio: project.heroRatio || "4 / 2.5" }}
          >
            {project.hero ? (
              <img
                src={project.hero}
                alt={project.title}
                className="h-full w-full rounded-md object-cover object-center"
              />
            ) : (
              <ProjectArt
                art={project.art}
                label={project.title}
                radius="rounded-md"
                className="h-full w-full"
              />
            )}
          </div>

          <div className="font-neue mt-3 grid grid-cols-2 gap-x-2 gap-y-2 text-xs sm:text-sm">
            <p className="underline">role</p>
            <p>{project.role}</p>
            <p className="underline">skill &amp; tools</p>
            <p>{project.skills}</p>
          </div>

          {project.sections.map((block, i) => (
            <Section key={i} block={block} art={project.art} />
          ))}

          <div className="font-neue mt-10 flex w-full items-center justify-between border-t border-black/10 pt-4 text-sm text-black/60">
            <Link
              to="/projects"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer transition-colors duration-200 hover:text-accent"
            >
              &lt; all projects
            </Link>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="cursor-pointer transition-colors duration-200 hover:text-accent"
            >
              <span aria-hidden="true">back to top</span>
              &nbsp;&uarr;
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}