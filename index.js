var input = document.getElementById("input");
var div = document.getElementById("help");
var label = document.getElementById("label");
var inputTerminal = document.getElementById("input-terminal");
var commands = [
    { command: "- help", description: "Displays a list of all available commands." },
    { command: "- whoami", description: "Shows a brief introduction about me." },
    { command: "- resume", description: "Provides a link to my résumé." },
    { command: "- contact", description: "ways to reach me." },
    { command: "- skills", description: "Lists my technical skills." },
    { command: "- clear", description: "Clears the terminal screen." }
];
var contacts = [
    { site: "linkedin", link: "https://www.linkedin.com/in/eliot-eloi/" },
    // {site: "email", link: "eliot.eloi22@gmail.com"},
    { site: "github", link: "https://github.com/elioteloi" },
    { site: "leetcode", link: "https://leetcode.com/u/elioteloi/" }
];
var skills = [
    { skill: "- Typescript", description: "" },
    { skill: "- React-Native", description: "" },
    { skill: "- NodeJS", description: "" },
    { skill: "- Javascript", description: "" }
];
input === null || input === void 0 ? void 0 : input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        var target_1 = event.target;
        console.log(target_1.value);
        switch (target_1.value) {
            case "help":
                div.innerHTML = "";
                commands.forEach(function (cmd) {
                    var terminal = document.createElement("div");
                    var command = document.createElement("p");
                    var descriptions = document.createElement("p");
                    terminal.style.display = "flex";
                    terminal.style.fontSize = "14px";
                    terminal.style.justifyContent = "start";
                    terminal.style.gap = "63px";
                    command.textContent = cmd.command;
                    command.style.color = "white";
                    command.style.fontSize = "20px";
                    command.style.fontWeight = "bold";
                    descriptions.textContent = cmd.description;
                    descriptions.style.alignContent = "center";
                    terminal === null || terminal === void 0 ? void 0 : terminal.appendChild(command);
                    terminal === null || terminal === void 0 ? void 0 : terminal.appendChild(descriptions);
                    div === null || div === void 0 ? void 0 : div.appendChild(terminal);
                    console.log("its here", cmd);
                    div === null || div === void 0 ? void 0 : div.appendChild(inputTerminal);
                    target_1.value = "";
                });
                break;
            case "whoami":
                div.innerHTML = "- My name is Eliot I'm 23 years old, french national living in Brazil (Florianopolis). Studying ADS (Systems Analysis and Development) until 2027 at the SENAI Technology College in Florianópolis.";
                div === null || div === void 0 ? void 0 : div.appendChild(inputTerminal);
                target_1.value = "";
                break;
            case "resume":
                div.innerHTML = "";
                var imageCv = document.createElement("img");
                var cvCommand = document.createElement("p");
                imageCv.src = "./images/EliotEloiCVENG.png";
                imageCv.width = 300;
                cvCommand.innerHTML = 'Use "resume --download" to download above resume in the specified format.';
                div === null || div === void 0 ? void 0 : div.appendChild(imageCv);
                div === null || div === void 0 ? void 0 : div.appendChild(cvCommand);
                div === null || div === void 0 ? void 0 : div.appendChild(inputTerminal);
                target_1.value = "";
                break;
            case "contact":
                div.innerHTML = "";
                contacts.forEach(function (element) {
                    console.log("contacts", element);
                    var links = document.createElement("a");
                    links.href = element.link;
                    links.target = "_blank";
                    links.style.display = "flex";
                    links.style.color = "white";
                    links.style.marginBottom = "12px";
                    links.innerHTML = element.site;
                    div === null || div === void 0 ? void 0 : div.appendChild(links);
                    target_1.value = "";
                });
                div === null || div === void 0 ? void 0 : div.appendChild(inputTerminal);
                target_1.value = "";
                break;
            case "skills":
                div.innerHTML = "";
                div.innerHTML = "## Programming Languages";
                skills.forEach(function (skill) {
                    var skillP = document.createElement("p");
                    skillP.textContent = skill.skill;
                    console.log(skill.skill);
                    div === null || div === void 0 ? void 0 : div.appendChild(skillP);
                });
                div === null || div === void 0 ? void 0 : div.appendChild(inputTerminal);
                target_1.value = "";
                break;
            case "clear":
                div.innerHTML = "";
                div === null || div === void 0 ? void 0 : div.appendChild(inputTerminal);
                target_1.value = "";
                break;
            case "--download":
                var link = document.createElement("a");
                link.href = "./EliotEloiCVENG.pdf";
                link.download = "/images/EliotEloiCVENG.pdf";
                link.target = "_blank";
                link.click();
                break;
            default:
                div.innerHTML = "<h3>".concat(target_1.value, ": command not found</h3>");
                div === null || div === void 0 ? void 0 : div.appendChild(inputTerminal);
                target_1.value = "";
                break;
        }
    }
});
