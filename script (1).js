// EDIT THIS LIST. Add one object per project.
const projects = [
  {
    name: "Personal Portfolio Website",
    tag: "Portfolio",
    description: "This site: a responsive static portfolio hosted on GitHub Pages.",
    stack: "HTML, CSS, JavaScript",
    repo: "https://github.com/cervanteschrissa-ship-it/cervanteschrissa-ship-it.github.io",
    demo: "https://cervanteschrissa-ship-it.github.io"
  },
  {
    name: "Group 13 Web Application",
    tag: "Web Development class, Week 6",
    description: "A group web application built with Laravel Blade templates for my Web Development class, developed together with my groupmates.",
    stack: "Laravel Blade, HTML, CSS",
    repo: "https://github.com/cervanteschrissa-ship-it/webdev-week06-Group13",
    demo: ""
  },
  {
    name: "Web Development Activity",
    tag: "Web Development class, Week 1",
    description: "A static web page built with HTML as an introductory activity in my Web Development class.",
    stack: "HTML",
    repo: "https://github.com/cervanteschrissa-ship-it/webdev-week01-Chrissa-Cervantes",
    demo: ""
  },
  {
    name: "Global Pokédex Database API",
    tag: "Team project with Timothy Alvarez",
    description: "A group project: a Java Spring Boot backend for a Pokémon database, with login, list-all, and add-Pokémon endpoints.",
    stack: "Java, Spring Boot, REST API",
    repo: "https://github.com/timothyalvarez76-max/pokedex",
    demo: ""
  }
];

const list = document.getElementById("project-list");
projects.forEach(p => {
  const card = document.createElement("article");
  card.className = "card";
  const tag = el("p", p.tag, "tag");
  const h3 = el("h3", p.name);
  const desc = el("p", p.description);
  const stack = el("p", p.stack, "stack");
  const links = el("div", "", "links");
  if (p.repo) links.appendChild(link("Code", p.repo));
  if (p.demo) links.appendChild(link("Live site", p.demo));
  card.append(tag, h3, desc, stack, links);
  list.appendChild(card);
});

function el(tagName, text, cls) {
  const e = document.createElement(tagName);
  if (text) e.textContent = text;
  if (cls) e.className = cls;
  return e;
}
function link(label, href) {
  const a = el("a", label);
  a.href = href; a.target = "_blank"; a.rel = "noopener";
  return a;
}

// Light/dark toggle (remembers the choice when the browser allows it)
const root = document.documentElement;
const btn = document.getElementById("theme");
let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
const start = saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
setTheme(start);
btn.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));
function setTheme(t) {
  root.dataset.theme = t;
  btn.textContent = t === "dark" ? "Light" : "Dark";
  try { localStorage.setItem("theme", t); } catch (e) {}
}

document.getElementById("year").textContent = new Date().getFullYear();
