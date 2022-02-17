
export const skills = [
    "JavaScript",
    "React",
    "Redux",
    "Python",
    "Html",
    "Css",
    "NodeJS",
    "ExpressJs",
    "Postgresql",
    "Django",
    "MongoDB",
    "TypeScript"
];

export const about = {
    text: "Hi there!  Welcome to my portfolio. Im a full-stack software developer from Miami FL. Codding is something that I truely have a passion for. I enjoy solving complex problems while always looking to improve my skills. I love  turning cool project ideas into reality . Get in touch with me, let's go!"
}


export const projects = [

    {
        title: "UFC",
        subtitle: "Ufc rankings api",
        description: "React, React-bootstrap, Python, Postgresql, Django, Docker, AWS",
        image: "./projects/project-2.gif",
        link: "https://ufc-rankings.netlify.app/"
    },
    {
        title: "Card Trick",
        subtitle: "Game",
        description: "JavaScript, React, Redux",
        image: "./projects/project-3.gif",
        link: "https://c-game-az.netlify.app/"
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
    {
        title: "Progress Bar",
        subtitle: "Mock API",
        description: "React",
        image: "./projects/project-4.gif",
        link: "https://survey-demo.netlify.app/"
    }
];

export const footer = {
    email: "azshog@gmail.com",
    git: "https://github.com/Azamat-Shogen?tab=overview&from=2022-02-01&to=2022-02-05",
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


