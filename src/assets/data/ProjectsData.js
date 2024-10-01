export const PROJECTS_INFO = {
    projectList: [
        {
            name: "Katalogize",
            thumbnail: require("../img/project-images/katalogize/katalogize1.png"),
            year: 2022,
            tags: ["Web", "Fullstack"],
            shortDescription: "A web application to catalog anything you want, however you need. Built from prototype to production.",
            fullDescription: "Katalogize is a fullstack application developed from prototype to production.\nThe application allows users to catalog anything they want and however they need, with customizable templates like text, number, images and more to come.\nFor developer users, there is also a public API that allows them to retrieve the exact data needed from their catalogs through GraphQL.",
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
            fullDescription: "Astrolight is a game developed in 72 hours for a game jam, about an astronaut searching for the spaceship parts to continue his space mission. The game ranked 1st place in 3 categories: Design, Fun and Theme! Ending up with 2nd place overall.\nArt, animation, SFX, music and coding were developed by me during the game jam time",
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
            fullDescription: "Creating robots is a new passion of mine that I have been exploring lately. These robots are an on going work, created using arduino along with some other components like LEDs, displays, echo sensors, motors, cameras, etc.",
            technologies: ["Arduino", "C++"],
            redirectLinks: [
            ],
            imageList: [
                require("../img/project-images/robotics/robotics.jpg")
            ]
        },
        {
            name: "Blind Assistance App",
            thumbnail: require("../img/project-images/default_code0.jpg"),
            year: 2019,
            tags: ["Assistive","AI", "Research"],
            shortDescription: "An application to help blind people find objects with their phones.",
            fullDescription: "In this project with SMArT lab, a mapping study was conducted to investigate how the scientific community uses Ambient intelligence technologies to assist visually impaired people. This study was published at the International Conference on Information Technology-New Generations (ITNG).\nBased on this study, we also developed an application to help blind people find objects with their phones. This application uses YOLO, a state of the art technology to recognize the objects in a picture and inform its location in degrees.",
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
            fullDescription: "Gina Tells is a work an virtual assistant made with my friends, that will help people discover movies to watch based on unpredictable questions that Gina will ask. As a web application, we are using the IMDB database to query movies.",
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
            fullDescription: "Making art is a hobby of mine that I have always utilized in different projects that may require any type of visualization. From pixel art to 3D, I have incorporated my art in games, conversational agents, assistants and many others.",
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
        {
            name: "Stranger Witch",
            thumbnail: require("../img/project-images/strangerWitch/StrangerWitchCover.png"),
            year: 2020,
            tags: ["AI", "Animation", "Games"],
            shortDescription: "A game made for the GMTK Game Jam in 48 hours.",
            fullDescription: "Stranger Witch is a game developed in 48 hours for GTMK Game Jam 2020, about a little witch that has no control over her abilities trying to escape the dark florest. The theme of the game jam was Out of Control.\nArt, animation, music and coding were developed by me during the game jam time",
            technologies: ["Unity", "Aseprite", "Audacity", "Bosca Ceoil"],
            redirectLinks: [
                {name: "Play the Game", link:"https://jolomoju.itch.io/stranger-witch"}
            ],
            imageList: [
                require("../img/project-images/strangerWitch/StrangerWitch1.png"),
                require("../img/project-images/strangerWitch/StrangerWitch2.png")
            ]
        }
    ]
}