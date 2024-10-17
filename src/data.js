
export const skills = [
    "JavaScript",
    "React",
    "Redux",
    "Python",
    "HTML",
    "CSS",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Django",
    "MongoDB",
    "TypeScript",
    "Automation Testing",
    "Pytest",
    "Selenium",
    "Jenkins",
    "Next.js",
    "Docker",
    "GitHub",
    "GitLab"
];


export const about = {
    text: "Hello! I'm a dedicated software developer with a passion for creating efficient and innovative solutions. I love tackling new challenges and continuously expanding my skill set. Always open to collaboration and learning opportunities, feel free to connect!"
}



export const projects = [
    {
        title: "Admin Dashboard",
        subtitle: "Landing Page / admin-client portal",
        description: "TypeScript, NextJs, Server actions, ShadcnUI, Prisma, Versel",
        image: "./projects/project-8.gif",
        link: "https://www.ipro-permits.com/"
    },
    {
        title: "Card Trick",
        subtitle: "Game",
        description: "JavaScript, React, Redux",
        image: "./projects/project-3.gif",
        link: "https://c-game-az.netlify.app/"
    },
   
    {
        title: "Bean Machine",
        subtitle: "Game",
        description: "React, JavaScript, Canvas",
        image: "./projects/project-6.gif",
        link: "https://bean-machine.netlify.app/"
    },
    {
        title: "UFC",
        subtitle: "Ufc rankings api",
        description: "React, React-bootstrap, Python, Postgresql, Django, Docker, AWS",
        image: "./projects/project-2.gif",
        link: "https://ufc-rankings.netlify.app/"
    },

    {
        title: "Imc Permits Portal",
        subtitle: "Mern Stack",
        description: "React, Redux, Material UI, NodeJS, ExpressJS, MongoDB, SendGrid",
        image: "./projects/project-1.gif",
        link: "https://imc-permits-portal.netlify.app/"
    },

    {
        title: "Card Trick ||",
        subtitle: "Console Game",
        description: "Python",
        image: "./projects/project-5.gif",
        link: "https://github.com/Azamat-Shogen/card_trick_python"
    },

 
];

export const footer = {
    email: "az.shogen.dev@gmail.com",
    git: "https://github.com/Azamat-Shogen",
    linkedin: "https://www.linkedin.com/in/azamat101/"
}

async function postData(url = "", data = {}){
    const response = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}


