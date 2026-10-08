// EDIT THIS LIST. Add one object per project, newest year last or first, up to you.
// Each project goes under its school year heading automatically.
const projects = [
  {
    year: "3rd year",
    name: "Project Name",
    description: "One sentence on what it does and who it is for.",
    stack: "HTML, CSS, JavaScript",
    repo: "https://github.com/your-username/project-name",
    demo: "" // optional live link, leave empty if none
  },
  {
    year: "2nd year",
    name: "Another Project",
    description: "One sentence on what it does and who it is for.",
    stack: "Python, SQLite",
    repo: "https://github.com/your-username/another-project",
    demo: ""
  },
  {
    year: "1st year",
    name: "First Year Project",
    description: "One sentence on what it does and who it is for.",
    stack: "Java",
    repo: "https://github.com/your-username/first-year-project",
    demo: ""
  }
];

const main = document.getElementById("projects");
const byYear = {};
projects.forEach(p => (byYear[p.year] = byYear[p.year] || []).push(p));

Object.entries(byYear).forEach(([year, list]) => {
  const section = document.createElement("section");
  section.className = "year";
  const h2 = document.createElement("h2");
  h2.textContent = year;
  section.appendChild(h2);

  list.forEach(p => {
    const el = document.createElement("article");
    el.className = "project";

    const h3 = document.createElement("h3");
    h3.textContent = p.name;
    const desc = document.createElement("p");
    desc.textContent = p.description;
    const stack = document.createElement("p");
    stack.className = "stack";
    stack.textContent = p.stack;

    const links = document.createElement("div");
    links.className = "links";
    if (p.repo) links.appendChild(makeLink("Source code", p.repo));
    if (p.demo) links.appendChild(makeLink("Live demo", p.demo));

    el.append(h3, desc, stack, links);
    section.appendChild(el);
  });

  main.appendChild(section);
});

function makeLink(label, href) {
  const a = document.createElement("a");
  a.href = href;
  a.textContent = label;
  a.target = "_blank";
  a.rel = "noopener";
  return a;
}
