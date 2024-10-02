export const PROJECTS_INFO = {
    projectList: [
        {
            name: "Brainy",
            thumbnail: require("../img/project-images/brainy/brainy1.png"),
            year: 2024,
            tags: ["Mobile", "Fullstack"],
            shortDescription: "A mobile application to use GenAI in daily tasks, like analyze stocks, summarize news, and more.",
            fullDescription: "Brainy is an AI-powered mobile application designed to streamline daily tasks such as stock analysis, news summarization, and video summarization. Built with a robust backend in Python and a dynamic frontend in React, Brainy is deployed using Docker on a VPS, ensuring scalable and efficient performance.",
            technologies: ["Python", "React Native", "Generative AI", "Docker"],
            redirectLinks: [
            ],
            imageList: [
                require("../img/project-images/brainy/brainy4.png"),
                require("../img/project-images/brainy/brainy5.png")
            ]
        },
        {
            name: "Katalogize",
            thumbnail: require("../img/project-images/katalogize/katalogize1.png"),
            year: 2022,
            tags: ["Web", "Fullstack"],
            shortDescription: "A web application to catalog anything you want, however you need. Built from prototype to production.",
            fullDescription: "Katalogize is a fullstack application developed from prototype to production.\nThe application allows users to catalog anything they want and however they need, with custom templates featuring text, numbers, images, and more, tailored to their specific needs.\nFor developer users, there is also a public API that allows them to retrieve the exact data needed from their catalogs through GraphQL.",
            technologies: ["Spring Boot", "GraphQL", "MongoDB", "React", "Docker", "GCP"],
            redirectLinks: [
                {name: "Visit Katalogize", link:"https://katalogize.com"}
            ],
            imageList: [
                require("../img/project-images/katalogize/katalogize2.png"),
                require("../img/project-images/katalogize/katalogize3.png")
            ]
        },
        {
            name: "Astrolight",
            thumbnail: require("../img/project-images/astrolight/astrolight_thumbnail.png"),
            year: 2020,
            tags: ["Game", "Design"],
            shortDescription: "A game about an astronaut developed in 72 hours for a game jam.",
            fullDescription: "Astrolight is a game developed in just 72 hours for a game jam, where players take on the role of an astronaut searching for spaceship parts to continue a space mission. Out of over 100 competing games, Astrolight achieved 1st place in three categories (Design, Fun, and Theme) and secured 2nd place overall. All aspects of the game, including art, animation, sound effects, music, and coding, were created by me during the game jam.",
            technologies: ["Unity", "Aseprite", "Audacity", "Bosca Ceoil"],
            redirectLinks: [
                {name: "Play the Game", link:"https://jolomoju.itch.io/astrolight"}
            ],
            imageList: [
                require("../img/project-images/astrolight/astrolight_1.png"),
                require("../img/project-images/astrolight/astrolight_2.png")
            ]
        },
        {
            name: "Robotics",
            thumbnail: require("../img/project-images/robotics/robotics.jpg"),
            year: 2021,
            tags: ["IoT","Robots", "Research"],
            shortDescription: "Robots and prototypes created with Arduino",
            fullDescription: "I have developed a strong interest in robotics, which has become a key area of personal exploration. My projects involve designing and building robots using Arduino as the central platform, integrating components such as LEDs, displays, ultrasonic sensors, motors, cameras, and more. This hands-on experience has allowed me to continuously expand my technical expertise and explore innovative applications in robotics and automation.",
            technologies: ["Arduino", "C++"],
            redirectLinks: [
            ],
            imageList: [
                require("../img/project-images/robotics/robotics.jpg"),
                require("../img/project-images/robotics/robotics2.jpg")
            ]
        },
        {
            name: "Blind Assistance App",
            thumbnail: require("../img/project-images/default_code0.jpg"),
            year: 2019,
            tags: ["Assistive","AI", "Research"],
            shortDescription: "An application to help blind people find objects with their phones.",
            fullDescription: "In collaboration with the SMArT lab, we conducted a comprehensive mapping study to explore how the scientific community leverages Ambient Intelligence technologies to support visually impaired individuals. The findings of this study were published at the International Conference on Information Technology-New Generations (ITNG).\nBuilding on this research, we developed an application designed to help blind individuals locate objects using their smartphones. The app utilizes YOLO, a cutting-edge object recognition technology, to identify objects in an image and provide their location in degrees, offering an innovative solution for improved accessibility.",
            technologies: ["Object Recognition", "YOLO", "Android Studio", "Java", "C", "TalkBack"],
            redirectLinks: [
                {name: "Check the published paper", link:"https://link.springer.com/chapter/10.1007/978-3-030-70416-2_21"}
            ],
            imageList: [
                require("../img/project-images/smartApp/smartApp2.jpg"),
                require("../img/project-images/smartApp/smartApp1.jpg")
            ]
        },
        {
            name: "Artificial Life Simulation",
            thumbnail: require("../img/project-images/alife/alife.png"),
            year: 2018,
            tags: ["AI", "CG", "Research"],
            shortDescription: "Artificial Life surving a simulated environment with AI.",
            fullDescription: "In  this  project, an  evolutionary  feed-forward  neural  network model was developed to  autonomously  control  an  agent in an artificial life based environment, which has the goal of surviving doing its own decisions rationally. The evolution of the neural network is managed by a genetic algorithm that is in charge of modifying the network weights. With this, the agents were able to learn how to efficiently survive in this environment, adapting to its rules.",
            technologies: ["Neural networks", "genetic algorithms", "Unity"],
            redirectLinks: [
            ],
            imageList: [
                require("../img/project-images/alife/alife.png"),
                require("../img/project-images/alife/alife2.jpg")
            ]
        },
        {
            name: "Virtual Reality Simulation",
            thumbnail: require("../img/project-images/vr-simulation/vr-simulation1.png"),
            year: 2023,
            tags: ["VR", "3D", "Simulation"],
            shortDescription: "A virtual reality simulation of a cozy island with day/night cycles made with Unity.",
            fullDescription: "A virtual reality simulation of a cozy island with day/night cycles made with Unity.\nThe simulation contains dynamic animated components that move based on shaders and scripts to create the atmosphere and cycles.\nIt can be played either on PC or PCVR, compatible with Oculus Quest 2.",
            technologies: ["VR", "Oculus Quest", "Unity", "Blender", "Bosca Ceoil", "Normal Map Online"],
            redirectLinks: [
                {name: "Play the Simulation", link:"https://jolomoju.itch.io/jolomoju-island"}
            ],
            imageList: [
                require("../img/project-images/vr-simulation/vr-simulation1.png"),
                require("../img/project-images/vr-simulation/vr-simulation2.png"),
                require("../img/project-images/vr-simulation/vr-simulation3.png")
            ]
        },
        {
            name: "Skye's Dice",
            thumbnail: require("../img/project-images/skyesdice/skyesdice_thumbnail3.png"),
            year: 2022,
            tags: ["Game", "Design", "3D"],
            shortDescription: "A 3D puzzle game developed in 48 hours for a game jam.",
            fullDescription: "Skye's is a game developed in 48 hours for the GMTK game jam, about a little girl called Skye trying to find her way back home after being abducted to a new dimension. The game ranked top 6%, on #365 place out of 6156 games.\nArt, animation, music and coding were developed by me during the game jam time",
            technologies: ["Unity", "Blender", "Krita", "Bosca Ceoil", "Normal Map Online"],
            redirectLinks: [
                {name: "Play the Game", link:"https://jolomoju.itch.io/skyes-dice"}
            ],
            imageList: [
                require("../img/project-images/skyesdice/skyesdice_4.png"),
                require("../img/project-images/skyesdice/skyesdice_3.png")
            ]
        },
        {
            name: "Empathic Conversational Agent",
            thumbnail: require("../img/project-images/eca/eca3.png"),
            year: 2019,
            tags: ["AI", "Design", "Research"],
            shortDescription: "An conversational agent that can comunicate and mimic emotions.",
            fullDescription: "This project proposes an architecture of an empathic Embodied Conversational Agent (ECA) to evaluate the empathy in a conversation with an agent, that can analyze and reproduce certain emotions while acting in an University context as a virtual helper for students.  This ECA combines a face analyzer toolkit, a decision tree to determine the agent behavior, all these parts combined with a set of pre-processed  animations  resulting  in  a  multi-modal communication virtual assistant extended to a mobile phone.\nWith this project and the help from the Virtual Human Laboratory (VHLab) team, we were also able to develop a scientific paper that was published by the International Conference on Semantic Computing (ICSC) at the IEEE platform.",
            technologies: ["Unity", "Affectiva", "face detection", "eye tracker", "emotion detection"],
            redirectLinks: [
                {name: "Check the published paper", link:"https://ieeexplore.ieee.org/abstract/document/9364406"}
            ],
            imageList: [
                require("../img/project-images/eca/eca3.png"),
                require("../img/project-images/eca/ecaArch.jpg")
            ]
        },
        {
            name: "Movie Recomendation System",
            thumbnail: require("../img/project-images/default_code1.jpg"),
            year: 2021,
            tags: ["Web", "Design"],
            shortDescription: "An assistant to help you discover movies to watch.",
            fullDescription: "Gina Tells is an ongoing project developed collaboratively with friends. It’s a virtual assistant designed to help users discover movies through a fun and engaging experience. Instead of traditional recommendations, Gina asks unpredictable questions to guide users toward personalized movie suggestions. This web application, which integrates full-stack capabilities, is a work in progress. The project involves frontend and backend development, cloud deployment, and the use of Docker and Kubernetes for containerization and orchestration. We leverage the IMDB database to provide a diverse range of movie options based on user input.",
            technologies: ["IMDB", "dotNet", "React"],
            redirectLinks: [
            ],
            imageList: [
            ]
        },
        {
            name: "Artwork & 3D",
            thumbnail: require("../img/project-images/artwork/artwork.jpeg"),
            year: 2021,
            tags: ["Art", "3D", "Animation", "Games"],
            shortDescription: "Artwork made in 2D and 3D.",
            fullDescription: "Creating art has long been a personal passion of mine, and I have consistently applied this creative vision to projects requiring visual elements. From pixel art to 3D design, I have incorporated my unique visual approach into diverse applications, including games, conversational agents, virtual assistants, and more.",
            technologies: ["Blender", "Unity", "Aseprite", "Krita Studio"],
            redirectLinks: [
            ],
            imageList: [
                require("../img/project-images/artwork/purpose.png"),
                require("../img/project-images/artwork/pearl.png")
            ]
        },
        {
            name: "Save the Giraffes!",
            thumbnail: require("../img/project-images/automatic-planner/automatic-planner.png"),
            year: 2020,
            tags: ["AI", "Animation", "Games"],
            shortDescription: "An automatic planner domain with a virtual visualization.",
            fullDescription: "This application consists of a new PDDL planning domain that has the goal of saving the runaway giraffes from the Madagascar ZOO. The domain consists of locals, agents and giraffes. Giraffes are only saved with the help of agents and they go through different danger situations.\nFor a better visualization, a graphical interface was developed in Unity with models created in Blender, in order to animate the solution of the problems, since the solution that the planners return can become overwhelming to understand.",
            technologies: ["PDDL", "Unity", "Blender", "automatic planner."],
            redirectLinks: [
            ],
            imageList: [
                require("../img/project-images/automatic-planner/automatic-planner2.png"),
                require("../img/project-images/automatic-planner/automatic-planner3.png")
            ]
        },
        // {
        //     name: "Stranger Witch",
        //     thumbnail: require("../img/project-images/strangerWitch/StrangerWitchCover.png"),
        //     year: 2020,
        //     tags: ["AI", "Animation", "Games"],
        //     shortDescription: "A game made for the GMTK Game Jam in 48 hours.",
        //     fullDescription: "Stranger Witch is a game developed in 48 hours for GTMK Game Jam 2020, about a little witch that has no control over her abilities trying to escape the dark florest. The theme of the game jam was Out of Control.\nArt, animation, music and coding were developed by me during the game jam time",
        //     technologies: ["Unity", "Aseprite", "Audacity", "Bosca Ceoil"],
        //     redirectLinks: [
        //         {name: "Play the Game", link:"https://jolomoju.itch.io/stranger-witch"}
        //     ],
        //     imageList: [
        //         require("../img/project-images/strangerWitch/StrangerWitch1.png"),
        //         require("../img/project-images/strangerWitch/StrangerWitch2.png")
        //     ]
        // }
    ]
}