const input = document.getElementById("input");
const div = document.getElementById("help");

const label = document.getElementById("label")
const inputTerminal = document.getElementById("input-terminal")

const commands = [
    {command: "- help", description: "Displays a list of all available commands."}, 
    {command: "- whoami", description: "Shows a brief introduction about me."}, 
    {command: "- resume", description: "Provides a link to my résumé."}, 
    {command: "- contact", description: "ways to reach me."}, 
    {command: "- skills", description: "Lists my technical skills."}, 
    {command: "- clear", description: "Clears the terminal screen."}
]

const contacts = [
    {site: "linkedin", link: "https://www.linkedin.com/in/eliot-eloi/"},
    // {site: "email", link: "eliot.eloi22@gmail.com"},
    {site: "github", link: "https://github.com/elioteloi"},
    {site: "leetcode", link: "https://leetcode.com/u/elioteloi/"}
]

const skills = [
    {skill: "- Typescript", description: ""},
    {skill: "- React-Native", description: ""},
    {skill: "- NodeJS", description: ""},
    {skill: "- Javascript", description: ""}
]

input?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const target = event.target as HTMLInputElement;
        console.log(target.value);
        
        switch (target.value) {
            case "help": 


            div!.innerHTML = "";
                commands.forEach(cmd => {
                    const terminal = document.createElement("div")
                    const command = document.createElement("p")
                    const descriptions = document.createElement("p")
                    
                    terminal.style.display = "flex"
                    terminal.style.fontSize = "14px";
                    terminal.style.justifyContent = "start"
                    terminal.style.gap = "63px"

                    command.textContent = cmd.command
                    command.style.color = "white"
                    command.style.fontSize = "20px"
                    command.style.fontWeight = "bold"

                    descriptions.textContent = cmd.description
                    descriptions.style.alignContent = "center"

                    terminal?.appendChild(command)
                    terminal?.appendChild(descriptions)
                    div?.appendChild(terminal)
                    console.log("its here", cmd);
                    
                    div?.appendChild(inputTerminal!);
                    target.value = ""

                })
                break
            case "whoami":
                div!.innerHTML = "- My name is Eliot I'm 23 years old, french national living in Brazil (Florianopolis). Studying ADS (Systems Analysis and Development) until 2027 at the SENAI Technology College in Florianópolis."
                div?.appendChild(inputTerminal!);
                target.value = ""
                break;
            case "resume":
                div!.innerHTML = "";
                const imageCv = document.createElement("img")
                const cvCommand = document.createElement("p")
                imageCv.src = "./images/EliotEloiCVENG.png"
                imageCv.width = 300
                cvCommand.innerHTML = 'Use "resume --download" to download above resume in the specified format.'
                div?.appendChild(imageCv)
                div?.appendChild(cvCommand)
                div?.appendChild(inputTerminal!);
                target.value = ""
                break
            case "contact":
            div!.innerHTML = "";

            contacts.forEach(element => {
                console.log("contacts", element);
                const links = document.createElement("a")
                links.href = element.link
                links.target = "_blank";
                links.style.display = "flex"
                links.style.color = "white"
                links.style.marginBottom = "12px"
                links!.innerHTML = element.site
                div?.appendChild(links)
                target.value = ""
            });
                
                div?.appendChild(inputTerminal!);
                target.value = ""
                break
            case "skills":
                div!.innerHTML = ""
                div!.innerHTML = "## Programming Languages"

                skills.forEach((skill) => {
                    const skillP = document.createElement("p")
                    skillP.textContent = skill.skill
                    console.log(skill.skill);
                    div?.appendChild(skillP)
                })
                div?.appendChild(inputTerminal!);
                target.value = ""
                break
            case "clear":
                div!.innerHTML = ""
                div?.appendChild(inputTerminal!);
                target.value = ""
                break
            case "--download":
                const link = document.createElement("a")
                
                link.href = "./EliotEloiCVENG.pdf";
                link.download = "/images/EliotEloiCVENG.pdf"
                link.target = "_blank";
                link.click()
                break
            default:
                div!.innerHTML = `<h3>${target.value}: command not found</h3>`
                div?.appendChild(inputTerminal!);
                target.value = ""
                break;
        }
    }
});