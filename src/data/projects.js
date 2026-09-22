export const projects = [
  {
    slug: "gesture-based-virtual-interaction-system",
    title: "Gesture-Based Virtual Interaction System",
    tag: "final year project 2025-26",
    role: "Developer, Researcher",
    skills: "Python, MediaPipe Hands, OpenCV, PyAutoGUI, pynput",
    tools: "MediaPipe, OpenCV, PyAutoGUI, pynput",
    meta: "Final Year Project · BSc (Hons) Computer Science · University of West London · 2026",
    art: "gesture",
    heroRatio: "2.243",
    hero: "/images/gesture/interface.png",
    thumb: "/images/gesture/interface.png",
    cardRatio: 1.6,
    summary:
      "A webcam-only system that lets you control your cursor, clicks and a virtual keyboard entirely through hand gestures, no extra hardware needed.",
    sections: [
      { type: "heading", text: "overview" },
      {
        type: "quote",
        text: "What if your hands could replace the mouse and keyboard entirely? No wearables, no depth sensors, just a standard laptop webcam.",
      },
      {
        type: "paragraph",
        text: "Gesture-based recognition sits at the intersection of human-computer interaction and provides a wide scope for inventions never seen before. It enables touchless interaction, allowing users to directly control and interact with digital systems via intuitive physical movements.",
      },
      {
        type: "paragraph",
        text: "This was the basis for my final year project: a real-time, computer vision based system that lets a standard webcam track hand movement and translate it into touchless mouse and keyboard control.",
      },
      { type: "heading", text: "problem" },
      {
        type: "paragraph",
        text: "Physical input devices assume physical contact, and that assumption breaks down more often than it seems. In sterile environments, every touched surface becomes a hygiene risk that has to be actively managed. For users with limited dexterity, gripping a mouse or pressing small keys can be genuinely difficult, where large, simple gestures would be far more accessible.",
      },
      {
        type: "paragraph",
        text: "Existing gesture systems don't solve this cleanly. Expensive wearables and sensors, deep-learning object detectors with high accuracy, but equally GPU acceleration to hit real-time speeds; these defeat the point of something meant to run on ordinary hardware.",
      },
      {
        type: "paragraph",
        text: "The gap, in other words: nobody had shown a webcam-only system that was both accurate and robust enough for real desktop use, without needing a GPU or specialized hardware.",
      },
      { type: "heading", text: "solution" },
      {
        type: "quote",
        text: "How far can you get with just a normal RGB laptop webcam and the right modeling pipeline?",
      },
      { type: "subheading", text: "01: Capture layer (OpenCV)" },
      {
        type: "paragraph",
        text: "Grabs raw frames from the webcam, mirrors them horizontally so the interaction feels natural, and passes them downstream.",
      },
      { type: "subheading", text: "02: Perception layer (MediaPipe Hands)" },
      {
        type: "paragraph",
        text: "Takes each RGB frame and returns 21 normalized (x, y, z) hand landmark coordinates per detected hand, plus left/right handedness, all running on CPU alone.",
      },
      { type: "subheading", text: "03: Interpretation layer" },
      {
        type: "paragraph",
        text: "A rule-based classifier that reads the landmark coordinates and decides what gesture is being made.",
      },
      { type: "subheading", text: "04: Action layer (PyAutoGUI + pynput)" },
      {
        type: "paragraph",
        text: "Translates the classified gesture into real OS-level input: cursor movement and clicks via PyAutoGUI, and keyboard character injection via pynput, chosen specifically because it supports the fuller Unicode character range the virtual keyboard needed.",
      },
      {
        type: "image",
        ratio: "1.253",
        src: "/images/gesture/architecture.png",
        alt: "High level system architecture diagram",
        caption: "high-level system architecture of the four-layer pipeline",
      },
      { type: "heading", text: "the classification logic" },
      {
        type: "paragraph",
        text: "Rather than training a neural network to classify gestures, the system uses a rule-based finger-extension detector based on the fingertip landmark's y-coordinates for non-thumb fingers and x-coordinates for thumbs.",
      },
      {
        type: "image",
        ratio: "2.424",
        src: "/images/gesture/landmarks.png",
        alt: "MediaPipe's 21 hand landmark points",
        caption: "MediaPipe's 21 hand landmark coordinates",
      },
      {
        type: "paragraph",
        text: "Two feature engineering problems mattered as much as the classification logic itself:",
      },
      {
        type: "list",
        items: [
          "Cursor jitter: Raw hand landmarks caused shaky cursor movement due to natural hand tremors. An exponential moving average (α = 0.25) was used to smooth movement while maintaining responsiveness, based on testing with five users.",
          "Gesture debouncing: Continuous gestures could trigger repeated actions, such as multiple clicks from one held gesture. A cooldown timer was added to prevent repeated triggers until a set time has passed.",
        ],
      },
      { type: "heading", text: "design decisions" },
      {
        type: "paragraph",
        text: "Using MediaPipe for landmark tracking (rather than training a custom hand-tracking model from scratch) was a deliberate scope decision. It's what let the system get deep-learning-level robustness to lighting and background variation, without needing a GPU or a custom dataset. Everything else in the design (the rule-based classifier, the cursor smoothing and cooldown system) exists to turn that landmark data into something usable, rather than to improve on the detection itself.",
      },
      { type: "heading", text: "results" },
      {
        type: "paragraph",
        text: "The system was evaluated on two fronts. Quantitatively, controlled gesture trials produced an overall recognition accuracy of 92–93%, with keystroke accuracy at 92.3% and end-to-end latency under 80 milliseconds, comfortably within real-time interaction requirements. That accuracy sits close to GPU-dependent YOLO approaches (86–91%) and clearly above Haar Cascade-based systems (70–85%), while running entirely on CPU.",
      },
      {
        type: "image",
        ratio: "1.228",
        src: "/images/gesture/results.png",
        alt: "Recognition results from the gesture test",
        caption: "results from the controlled gesture tests",
      },
      {
        type: "paragraph",
        text: "The qualitative feedback from participants consistently described the system as fun and easy to learn, with most feeling confident within five minutes, while the main friction points were fine cursor precision on small targets and mild arm fatigue during extended use. They were honest limitations rather than fatal ones.",
      },
      { type: "heading", text: "reflection" },
      {
        type: "paragraph",
        text: "The hardest part of this project wasn't the classification logic; a rule-based finger detector is conceptually simple. It was everything around it: tuning cursor smoothing against how an actual hand shakes, designing debouncing so gestures don't fire dozens of times per hold, and making sure all of it still ran in real time. Those are exactly the problems the literature review found the field paying the least attention to, which made them the parts of the project I ended up being able to defend most confidently.",
      },
    ],
  },
  {
    slug: "lead-qualification-whatsapp-chatbot",
    title: "Lead Qualification WhatsApp Chatbot",
    tag: "internship project 2025",
    role: "Developer",
    skills: "Flask, Twilio API, Google Sheets API, OAuth2, REST/webhooks",
    tools: "Flask, APIs & OAuth2, REST/webhooks",
    meta: "Internship project · AIITECH IT Education LLC · Automation & Customer Engagement · 2025",
    art: "chatbot",
    heroRatio: "1.779",
    hero: "/images/lead-qualification-whatsapp-chatbot/main.png",
    thumb: "/images/lead-qualification-whatsapp-chatbot/main.png",
    cardRatio: 1.5,
    summary:
      "An automated WhatsApp assistant that answers FAQs and captures leads straight into Google Sheets.",
    sections: [
      { type: "heading", text: "overview" },
      {
        type: "quote",
        text: "What if a WhatsApp chatbot could answer FAQs, capture leads and store CVs, without needing human intervention?",
      },
      {
        type: "paragraph",
        text: "During my internship at AIITECH, customer engagement ran through manual WhatsApp replies; every FAQ, every lead, every follow-up handled one message at a time. I built a chatbot to eliminate the task completion time: an automated WhatsApp assistant that answers common queries instantly, captures leads, and stores all details and CVs safely into a Google Sheets doc and local folder respectively.",
      },
      { type: "heading", text: "problem" },
      {
        type: "paragraph",
        text: "WhatsApp is where AIITECH's prospective students and customers actually were. That also meant every inquiry needed a human on the other end to respond, log the details somewhere and follow up. It was time consuming and meant that response speed depended entirely on someone being available in the moment. The institution needed responsiveness without needing a person online around the clock, and it needed the data generated by those conversations to be stored somewhere usable, not scattered across various chats.",
      },
      { type: "heading", text: "approach" },
      {
        type: "paragraph",
        text: "The chatbot is built as a Flask web application that sits behind Twilio's WhatsApp Business API, so incoming messages arrive as webhooks.",
      },
      { type: "subheading", text: "01: messaging layer (Twilio)" },
      {
        type: "paragraph",
        text: "Twilio's API handles the actual WhatsApp send/receive, with Flask running the webhook endpoint that processes each incoming message and decides how to respond.",
      },
      { type: "subheading", text: "02: query handling" },
      {
        type: "paragraph",
        text: "Incoming messages are matched against defined intents to answer common FAQs automatically, rather than routing everything to a human by default.",
      },
      { type: "subheading", text: "03: lead capture and storage" },
      {
        type: "paragraph",
        text: "User-provided details (and uploaded files like CVs) are written out to Google Sheets via the Google Sheets API, authenticated through OAuth2, so the data lands in a format the team could immediately act on without any manual re-entry.",
      },
      {
        type: "image",
        ratio: "2.889",
        src: "/images/lead-qualification-whatsapp-chatbot/sheets.png",
        full: true,
        alt: "Leads stored in a Google Sheets document",
        caption: "captured leads and CVs landing straight into Google Sheets",
      },
      { type: "subheading", text: "04: local development and testing" },
      {
        type: "paragraph",
        text: "The webhook was exposed for Twilio's sandbox using ngrok during development, which let the bot be tested against real WhatsApp messages before any cloud deployment.",
      },
      { type: "heading", text: "design decisions" },
      {
        type: "paragraph",
        text: "Routing everything through webhooks was the right call for something meant to feel instant. A webhook-driven Flask app only does work when a message actually arrives, instead of constantly checking whether one has.",
      },
      {
        type: "paragraph",
        text: "Writing straight to Google Sheets, rather than a custom database, was a deliberate choice for the internship context: the team could open a spreadsheet and immediately see and act on leads without needing any additional technical handoff.",
      },
      {
        type: "quote",
        text: "Sometimes the simplest storage layer is the right one, especially when the people using the output aren't engineers.",
      },
      { type: "heading", text: "reflection" },
      {
        type: "paragraph",
        text: "This project was as much about designing for a non-technical team as it was about the automation itself. The OAuth2-authenticated Sheets integration mattered just as much as the Twilio messaging logic, because it's what made the automation's output usable by the people who needed it. Building something inside an existing internship workflow, rather than as a standalone proof of concept, meant solving existing problems from day one.",
      },
    ],
  },
  {
    slug: "facial-emotion-detector",
    title: "Facial Emotion Detector",
    tag: "personal project 2025",
    role: "Developer",
    skills: "Python, OpenCV (cv2), Tkinter, Keras & TensorFlow, NumPy",
    tools: "OpenCV, Tkinter, Keras, TensorFlow, NumPy",
    meta: "Personal Project · Dyne Research · Deep Learning · Image Classification · 2025",
    art: "emotion",
    heroRatio: "1.844",
    hero: "/images/facial-emotion-detector/main.png",
    thumb: "/images/facial-emotion-detector/main.png",
    cardRatio: 1.5,
    summary:
      "A desktop app that reads your facial expression through a webcam and mirrors it back as a matching emoji in real time.",
    sections: [
      { type: "heading", text: "overview" },
      {
       type: "quote",
       text: "Can a computer read your face well enough to pick the right emoji for it in real-time? ", 
      },
      {
        type: "paragraph",
        text: "This project takes that question literally: a desktop app that watches your face through a webcam, classifies your expression into one of seven emotions, and mirrors it back to you as an emoji in real time.",
      },
      { type: "heading", text: "problem" },
      {
        type: "paragraph",
        text: "Emojis have become their own language for nonverbal cues, but they still require a person to manually pick one. The interesting technical problem underneath that is much harder: can a model look at a face and correctly classify what emotion it's expressing, fast enough and reliably enough to feel responsive?",
      },
      {
        type: "paragraph",
        text: "Faces vary hugely across people, lighting, and angle, and the seven target emotions: angry, disgusted, fearful, happy, neutral, sad, surprised. These emotions aren't always visually distinct from each other in a single frame.",
      },
      { type: "heading", text: "solution" },
      {
        type: "paragraph",
        text: "The project is built in three layers that have to work together in real time:",
      },
      { type: "subheading", text: "01: detection and classification" },
      {
        type: "paragraph",
        text: "A convolutional neural network trained on the FER2013 dataset; roughly 35,000 labeled 48×48 grayscale face images spread across the seven emotion categories. The network stacks several convolution and max-pooling blocks with dropout for regularization, before flattening into dense layers and a final softmax layer over the seven classes.",
      },
      {
        type: "image",
        ratio: "1.779",
        src: "/images/facial-emotion-detector/emotions.png",
        alt: "Range of facial emotions being detected",
        caption: "the range of facial expressions the model classifies in real time",
      },
      { type: "subheading", text: "02: face localization and the live pipeline" },
      {
        type: "paragraph",
        text: "OpenCV's Haar cascade classifier finds the bounding box of a face in each webcam frame before the crop is fed into the trained model. The classifier never sees the full frame, only the isolated, resized face region, which keeps the input consistent with how the model was trained.",
      },
      { type: "subheading", text: "03: the interface" },
      {
        type: "paragraph",
        text: "Rather than leaving this as a script that prints a label to a terminal, the project wraps the whole pipeline in a Tkinter desktop GUI: one panel shows the live webcam feed with the detected face and predicted emotion label, the second panel displays the matching emoji, updated continuously as the prediction changes.",
      },
      { type: "heading", text: "reflection" },
      {
        type: "paragraph",
        text: "The gap between 'the model works in a notebook' and 'the model works live in a GUI, fast enough to feel real-time' is bigger than it looks on paper. Getting the webcam capture, face detection, classification, and emoji rendering to run in a smooth loop without lag took more iteration than training the model itself. It's a good reminder that a deep learning project's hardest engineering problem often isn't the model at all.",
      },
    ],
  },
  {
    slug: "northstar-logistics-management-system",
    title: "Northstar Logistics Management System",
    tag: "data analysis 2026",
    role: "Data Analyst, Database Designer",
    skills: "SQL, R, Python, MongoDB Atlas, Google Colab",
    tools: "SQL, R, Python, MongoDB Atlas",
    meta: "Exploratory Data Analysis · Data Cleaning & Imputation · Feature Engineering · 2026",
    art: "northstar",
    heroRatio: "1.779",
    hero: "/images/northstar-logistics-management-system/main.png",
    thumb: "/images/northstar-logistics-management-system/main.png",
    cardRatio: 1.6,
    summary:
      "An exploratory data analysis that uncovers the real operational causes behind a fictional logistics company's delivery failures.",
    sections: [
      { type: "heading", text: "overview" },
      {
        type: "quote",
        text: "Is the problem with a logistics company's delivery failures the drivers, the vehicles or the data itself?",
      },
      {
        type: "paragraph",
        text: "NorthStar Urban Mobility and Logistics is a fictional logistics company but the dataset behind it is built to behave like a real one: messy, inconsistent, and full of operational problems hiding in plain sight. The brief was to take nine raw CSV files (orders, deliveries, drivers, vehicles, hubs, complaints, incidents, customers, and app events) and turn them into a full data story: cleaned, queried, modeled two different ways, and reported on.",
      },
      { type: "heading", text: "problem" },
      {
        type: "paragraph",
        text: "Logistics data looks deceptively simple; deliveries either succeed or they don't. But the NorthStar dataset made it clear early on that the real problem wasn't analysis, it was trust in the data itself. Zone labels alone had 16 inconsistent variants that needed collapsing into 7 canonical categories before a single meaningful query could run. Skip that step, and every downstream number like failure rates by zone, driver performance and vehicle cost would be evidently wrong.",
      },
      {
        type: "image",
        ratio: "1.779",
        src: "/images/northstar-logistics-management-system/zones.png",
        full: true,
        alt: "Zone inconsistencies collapsed into canonical categories",
        caption: "collapsing 16 zone label variants into 7 canonical categories",
      },
      { type: "heading", text: "approach" },
      {
        type: "paragraph",
        text: "The assignment asked for proficiency across four different data tools, each suited to a different part of the problem:",
      },
      {
        type: "list",
        items: [
          "SQL in R: for structured querying against the cleaned relational data.",
          "Python and R analytics (in Google Colab): for deeper statistical exploration and the visual statistics built to accompany the report.",
          "MongoDB Atlas: for a NoSQL schema design covering the same domain, with a query optimization strategy layered on top.",
          "A formatted Word report: tying all of it together for a non-technical reader.",
        ],
      },
      {
        type: "paragraph",
        text: "The MongoDB database wasn't just 'the same data, different database.' It meant actually reasoning through embedding versus referencing decisions for each relationship in the domain, designing a nine-index strategy and backing it with evidence.",
      },
      {
        type: "image",
        ratio: "2.699",
        src: "/images/northstar-logistics-management-system/mongodb.png",
        full: true,
        alt: "NoSQL schema design in MongoDB Atlas",
        caption: "the MongoDB Atlas schema design covering the same logistics domain",
      },
      { type: "heading", text: "reflection" },
      {
        type: "paragraph",
        text: "The most important decision in this project happened mid-build, catching that the original structure ran SQL queries before the zone data was cleaned, and pushing for a full restructure rather than patching results after the fact. It would have been easy to let flawed inputs quietly propagate into every chart and stat card in the final report.",
      },
      {
        type: "paragraph",
        text: "What I'm most proud of isn't any single finding, it's that every insight in the final report is grounded in an actual computed statistic from the cleaned dataset.",
      },
    ],
  },
  {
    slug: "wanderbites-e-commerce-website",
    title: "WanderBites E-commerce Website",
    tag: "e-commerce 2024",
    role: "Web Developer, UX/UI Designer",
    skills: "Shopify, Figma, Notion, Milanote, Agile/Scrum",
    tools: "Shopify, Figma, Agile/Scrum",
    meta: "Web Development · Shopify E-commerce · 2024",
    art: "wanderbites",
    heroRatio: "1.798",
    hero: "/images/wanderbites-e-commerce-website/main.png",
    thumb: "/images/wanderbites-e-commerce-website/main.png",
    cardRatio: 1.5,
    summary:
      "A curated, halal-friendly snack-box e-commerce site built on Shopify",
    sections: [
      { type: "heading", text: "overview" },
      {
        type: "quote",
        text: "Bring the world to your doorstep, one box at a time.",
      },
      {
        type: "paragraph",
        text: "WanderBites is a curated snack-box e-commerce platform: country-themed boxes of snacks from around the world, from market research through to a working, checkout-ready Shopify store.",
      },
      { type: "heading", text: "problem" },
      {
        type: "paragraph",
        text: "Snack e-commerce is a crowded space but the gap that repeated consistently was that platforms sell snacks, not the experience around them. Existing sites often lack cultural storytelling, offer little personalization, barely engage with customer feedback, and routinely overlook dietary needs like halal, dairy-free or nut-free requirements.",
      },
      {
        type: "image",
        ratio: "1.078",
        src: "/images/wanderbites-e-commerce-website/survey.png",
        alt: "WanderBites market research survey",
        caption: "consumer research behind the WanderBites concept",
      },
      { type: "heading", text: "solution" },
      {
        type: "paragraph",
        text: "WanderBites answers this with country-themed snack boxes: Classics of China, Inspirations of Ireland, Soul of South Korea; each one halal, with variant options (soy-free, lactose-free, nut-free, gelatin-free) so users can filter out allergens without losing access to the box entirely.",
      },
      {
        type: "image",
        ratio: "1.54",
        src: "/images/wanderbites-e-commerce-website/variants.png",
        full: true,
        alt: "Allergen-safe product variants on WanderBites",
        caption: "allergen-safe variants available for each product",
      },
      {
        type: "paragraph",
        text: "On top of the core catalogue, the site includes a personalized quiz-based recommendation engine that matches users to a box based on their taste preferences, an AI-powered chatbot for instant support with live-agent handoff, real order tracking, and a review system split between site-wide and per-product feedback.",
      },
      {
        type: "image",
        ratio: "1.779",
        src: "/images/wanderbites-e-commerce-website/features2.png",
        full: true,
        alt: "WanderBites product and order features",
        caption: "product pages, order tracking and the chatbot system",
      },
      {
        type: "image",
        ratio: "1.779",
        src: "/images/wanderbites-e-commerce-website/features1.png",
        full: true,
        alt: "WanderBites storefront features",
        caption: "storefront features: catalogue, filters and variant selection",
      },
      {
        type: "paragraph",
        text: "Overseeing the site's structure end-to-end: I built the website layout, user interface and page structure in Shopify, ran the Milanote mind map that framed our initial deliverables and UI moodboard, and managed the Notion tracker that kept deadlines visible. On the technical side, I configured the Shopify inventory system, set up and wired in the backend plugins that gave us cart, checkout, and review functionality and built the initial Figma wireframes that became the site's actual UI. I also researched and compiled the snack list and dietary specifications for four of our nine assigned countries (South Korea, Japan, France, and Indonesia).",
      },
      {
        type: "image",
        ratio: "2.516",
        src: "/images/wanderbites-e-commerce-website/cms.png",
        full: true,
        alt: "WanderBites Shopify CMS",
        caption: "inventory inside the Shopify CMS",
      },
      { type: "heading", text: "design decisions" },
      {
        type: "quote",
        text: "The biggest decision on the project wasn't the design at all.",
      },
      {
        type: "paragraph",
        text: "It was switching platforms mid-build. Having started on Framer, its backend limitations and paywalled plugins made features like inventory management and flexible checkout genuinely impossible without extra cost. Moving to Shopify meant losing some early design work, but it's what actually let me ship a fully functional store with real payment handling, custom shipping zones and Cash on Delivery support.",
      },
      {
        type: "paragraph",
        text: "Rather than trying to model every possible dietary restriction as a separate product, I used Shopify's variant system and custom meta tags to let a single product carry multiple allergen-safe versions, which kept the catalogue manageable while still being genuinely useful to someone with a specific restriction.",
      },
      { type: "heading", text: "reflection" },
      {
        type: "paragraph",
        text: "The Framer-to-Shopify switch is the part of this project I'd point to first when asked what I learned. It wasn't a failure of planning so much as a reminder that technical feasibility needs to be validated early, before committing design work to a platform that can't actually support the feature set. Going forward, I want to pressure-test the technical foundation before the visual one, not after.",
      },
      {
        type: "paragraph",
        text: "Beyond that, this was the project where I most directly connected UI and web design along with backend implementation; designing the wireframes in Figma and then actually wiring up the plugins and inventory that made these designs functional. Seeing the site go from a Milanote moodboard to a real, checkout-tested Shopify store, with genuine user research and dietary inclusivity built into the product from the start, is what made this project feel like a complete product.",
      },
    ],
  },
  {
    slug: "jarviz-edu-web-software",
    title: "Jarviz Edu Web Software",
    tag: "education & robotics 2025",
    role: "Product Designer",
    skills: "UI/UX design, Figma, InMoov",
    tools: "Figma, Inmoov",
    meta: "Robot Control Web Application · AIITECH IT Education LLC · Education & Robotics · 2025",
    art: "jarviz",
    heroRatio: "1.406",
    hero: "/images/jarviz-edu-web-software/main.png",
    thumb: "/images/jarviz-edu-web-software/main.png",
    cardRatio: 1.4,
    summary:
      "A block-coding web app that teaches kids to program by letting them control a real InMoov humanoid robot, built with UAE Vision 2031 in mind.",
    sections: [
      { type: "heading", text: "overview" },
      {
        type: "quote",
        text: "Why teach kids to code with a console output when you can teach them with a real robot?",
      },
      {
        type: "paragraph",
        text: "Jarviz Edu is a web application designed to teach kids to code by letting them control something far more exciting than a console output: a real humanoid robot. Through a block-coding interface built on the PictoBlox model, students write logic that directly drives an InMoov humanoid robot, turning an abstract programming concept into a physical, visible result.",
      },
      { type: "heading", text: "problem" },
      {
        type: "paragraph",
        text: "Teaching kids to code usually means asking them to care about something invisible: a variable changing, a loop printing text, a function returning a value. That abstraction is exactly what makes early programming education hard to sustain engagement for, especially for younger learners who need to see cause and effect to stay motivated.",
      },
      {
        type: "paragraph",
        text: "There was also a bigger context shaping the brief: the project was devised with UAE Vision 2031 in mind, which places real weight on building a technically literate, innovation-ready generation. A tool for teaching coding needed to do more than function, it needed to be genuinely engaging enough to build a habit, not just a one-off classroom demo.",
      },
      { type: "heading", text: "solution" },
      {
        type: "paragraph",
        text: "Jarviz Edu closes the gap between code and consequence by making the output of a kid's program a physical robot's movement:",
      },
      { type: "subheading", text: "01: block-based coding interface" },
      {
        type: "paragraph",
        text: "Built on a PictoBlox-style visual programming model, so students snap together logic blocks rather than writing syntax, keeping the entry point accessible to kids with no prior coding background.",
      },
      { type: "subheading", text: "02: a coding console" },
      {
        type: "paragraph",
        text: "Paired alongside the block interface, giving slightly more advanced students a way to see and work with the underlying logic their blocks represent, creating a transition from visual to text-based programming.",
      },
      { type: "subheading", text: "03: direct control of InMoov" },
      {
        type: "paragraph",
        text: "The program a student builds doesn't just run in a browser sandbox, it drives a physical robot's actual movements, which turns their code into something a kid can watch happen in the room with them.",
      },
      {
        type: "image",
        ratio: "1.779",
        src: "/images/jarviz-edu-web-software/screen1.png",
        full: true,
        alt: "Jarviz Edu block-based coding interface",
        caption: "light mode interface design for the block interface and coding console",
      },
      {
        type: "image",
        ratio: "1.779",
        src: "/images/jarviz-edu-web-software/screen2.png",
        full: true,
        alt: "Jarviz Edu interface design",
        caption: "dark mode interface design for the block interface and coding console",
      },
      { type: "heading", text: "design decisions" },
      {
        type: "paragraph",
        text: "The core design decision was resisting a pure block-coding tool that stops at simulation. Plenty of educational coding platforms are well designed but ultimately abstract: code goes in, an animation plays. Tying the interface directly to InMoov's real movement was what made the concept worth building as a dedicated application rather than adapting an existing block-coding tool.",
      },
      {
        type: "paragraph",
        text: "Pairing the block interface with a coding console, rather than choosing one or the other, was designed to support a learning progression rather than a single skill level. A student isn't meant to stay a beginner forever, and the interface needed room for them to grow without switching tools entirely.",
      },
      { type: "heading", text: "reflection" },
      {
        type: "paragraph",
        text: "Designing for kids as the primary user, with an underlying policy goal (UAE Vision 2031's push toward technical literacy), meant the interface had to satisfy two audiences at once: engaging enough to hold a child's attention, and structured enough that educators and stakeholders could see a genuine coding curriculum underneath the fun. This was a cool project to work on and build during my internship.",
      },
    ],
  },
];

export const artPalettes = {
  gesture: ["#e8eefb", "#c5d3f7", "#8aa4ee"],
  chatbot: ["#eafaf1", "#c3ebd6", "#7ed3a9"],
  emotion: ["#fdeef3", "#f7c9d8", "#ef94b0"],
  northstar: ["#e9eefc", "#bfcdf6", "#7d9cf2"],
  wanderbites: ["#fff3e8", "#ffdcc0", "#ffad7a"],
  jarviz: ["#e5f8f6", "#bbeae4", "#7ed5ca"],
};

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}