const textElement = document.getElementById("text");

const textLines = [  
  "",
  "Eduardo Armenta Chávez                     Date of Birth: 03/03/87",
  "Valparaíso 1613                            Phone: (686)2446423",
  "Del Rastro 21090                           email: ed.armenta3@gmail.com",
  "Mexicali B.C. Mexico                       https://github.com/edarmenta3",
  "",
  "",
  "EDUCATION:",
  "",
  "01/2019             Universidad del Desarrollo Profesional - Bachelor of",
  "                    Computer Systems Engineering",
  "",
  "WORK EXPERIENCE:",
  "",
  "06/2023             Subsecretaria de Tecnologias de Informacion y Comunica",
  "                    ciones- Government of the State of Baja California:",
  "                    Systems Support Analyst",
  "",
  "01/2014             SRAX: Software QA Developer,",
  "                    Ad Ops Campaign Manager, Lead Generation Specialist",
  "",
  "03/2013             Oficina de Telefonía Pública BBG Comunicación:",
  "                    Technical Specialist",
  "",
  "08/2009             Digital Chocolate Inc: QA Tester",
  "",
  "",
  "",
  "SKILLS AND ABILITIES:",
  "",
  "Web Developer with experience in technologies ranging from Front-end:",
  "HTML, CSS, Bootstrap, JavaScript ES6, jQuery, EJS, and in Back-end:",
  "Node.js, Express.js, also knowledge in SQL, REST API, GIT,",
  "manual testing, automation testing, and currently learning",
  "PostgreSQL and React",
  "",
  "",
  "LANGUAGES:",
  "",
  "Spanish (Fluent) - Native Language",
  "English (Advanced) - ESL Institute",
  "",
];

const lineSpeed = 150;
const charSpeed = 10;

let currentLine = 0;

function typeLine() {
  if(currentLine >= textLines.length) return;

  let line = textLines[currentLine];
  let i = 0;

  function typeChar(){
    if (i < line.length) {
      textElement.textContent += line.charAt(i);
      i++;
      setTimeout(typeChar, charSpeed);
    } else {
      textElement.textContent += "\n";
      currentLine++;
      setTimeout(typeLine, lineSpeed);
    }
  }

  typeChar();
}

typeLine();



