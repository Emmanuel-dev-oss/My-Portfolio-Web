//== Tech Skills Filters ==//
document.addEventListener("DOMContentLoaded", function () {
  // Skill data organized by category
  const skillsData = {
    frontend: {
      title: "Frontend Development",
      icon: "fa-code",
      skills: [
        {
          name: "React",
          value: 90,
          color: "linear-gradient(to right, #00BCD4, #00f2fe)",
        },
        {
          name: "Vue.js",
          value: 75,
          color: "linear-gradient(to right, #4facfe, #00f2fe)",
        },
        {
          name: "Angular",
          value: 70,
          color: "linear-gradient(to right, #4facfe, #00f2fe)",
        },
        {
          name: "TypeScript",
          value: 85,
          color: "linear-gradient(to right, #4facfe, #00f2fe)",
        },
        {
          name: "HTML/CSS",
          value: 95,
          color: "linear-gradient(to right, #4facfe, #00f2fe)",
        },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: "fa-server",
      skills: [
        {
          name: "Node.js",
          value: 88,
          color: "linear-gradient(to right, #fa709a, #fee140)",
        },
        {
          name: "Python",
          value: 82,
          color: "linear-gradient(to right, #fa709a, #fee140)",
        },
        {
          name: "Java",
          value: 75,
          color: "linear-gradient(to right, #fa709a, #fee140)",
        },
        {
          name: "PHP",
          value: 70,
          color: "linear-gradient(to right, #fa709a, #fee140)",
        },
        {
          name: "Ruby",
          value: 65,
          color: "linear-gradient(to right, #fa709a, #fee140)",
        },
      ],
    },
    database: {
      title: "Database Management",
      icon: "fa-database",
      skills: [
        {
          name: "MongoDB",
          value: 85,
          color: "linear-gradient(to right, #43e97b, #38f9d7)",
        },
        {
          name: "MySQL",
          value: 80,
          color: "linear-gradient(to right, #43e97b, #38f9d7)",
        },
        {
          name: "PostgreSQL",
          value: 75,
          color: "linear-gradient(to right, #43e97b, #38f9d7)",
        },
        {
          name: "Redis",
          value: 70,
          color: "linear-gradient(to right, #43e97b, #38f9d7)",
        },
        {
          name: "Elasticsearch",
          value: 65,
          color: "linear-gradient(to right, #43e97b, #38f9d7)",
        },
      ],
    },
    tools: {
      title: "Development Tools",
      icon: "fa-tools",
      tools: [
        { name: "Git", icon: "fa-code-branch", desc: "Version control system" },
        {
          name: "Docker",
          icon: "fab fa-docker",
          desc: "Containerization platform",
        },
        { name: "VS Code", icon: "fa-code", desc: "Code editor" },
        { name: "Webpack", icon: "fa-cube", desc: "Module bundler" },
        { name: "Jest", icon: "fa-vial", desc: "Testing framework" },
        { name: "Figma", icon: "fa-palette", desc: "Design prototyping" },
        { name: "Postman", icon: "fa-paper-plane", desc: "API development" },
        { name: "AWS", icon: "fa-cloud", desc: "Cloud services" },
      ],
    },
  };

  // Graph data for each category
  const graphData = {
    frontend: {
      nodes: [
        { id: 1, name: "React", x: 260, y: 50 },
        { id: 2, name: "Vue", x: 360, y: 75 },
        { id: 3, name: "Angular", x: 150, y: 150 },
        { id: 4, name: "TypeScr.", x: 280, y: 220},
        { id: 5, name: "Html/css", x: 410, y: 150 },
      ],
      connections: [
        { from: 1, to: 4 },
        { from: 2, to: 4 },
        { from: 3, to: 4 },
        { from: 4, to: 5 },
        { from: 1, to: 5 },
        { from: 2, to: 5 },
        { from: 3, to: 5 },
      ],
    },
    backend: {
      nodes: [
        { id: 1, name: "Node.js", x: 260, y: 50 },
        { id: 2, name: "Python", x: 360, y: 75 },
        { id: 3, name: "Java", x: 150, y: 150 },
        { id: 4, name: "PHP", x: 280, y: 220 },
        { id: 5, name: "Ruby", x: 410, y: 150 },
      ],
      connections: [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 5 },
        { from: 1, to: 5 },
        { from: 2, to: 4 },
      ],
    },
    database: {
      nodes: [
        { id: 1, name: "M.DB", x: 260, y: 50 },
        { id: 2, name: "MySQL", x: 360, y: 75 },
        { id: 3, name: "PgreSQL", x: 150, y: 150 },
        { id: 4, name: "Redis", x: 280, y: 220 },
        { id: 5, name: "Esearch", x: 410, y: 150 },
      ],
      connections: [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 5 },
        { from: 1, to: 5 },
        { from: 2, to: 5 },
        { from: 3, to: 5 },
      ],
    },
    tools: {
      nodes: [
        { id: 1, name: "Git", x: 250, y: 60 },
        { id: 2, name: "Docker", x: 350, y: 120 },
        { id: 3, name: "VS Code", x: 200, y: 170 },
        { id: 4, name: "Webpack", x: 300, y: 220 },
        { id: 5, name: "Jest", x: 400, y: 170 },
        { id: 6, name: "Figma", x: 240, y: 250 },
        { id: 7, name: "Postman", x: 320, y: 20 },
        { id: 8, name: "AWS", x: 150, y: 120 },
      ],
      connections: [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 5 },
        { from: 5, to: 6 },
        { from: 6, to: 7 },
        { from: 7, to: 8 },
        { from: 8, to: 1 },
        { from: 1, to: 5 },
        { from: 2, to: 6 },
        { from: 3, to: 7 },
        { from: 4, to: 8 },
      ],
    },
  };

  // Filter functionality
  const filterButtons = document.querySelectorAll(".skill-filter-btn");
  const skillsContainer = document.getElementById("skillsContainer");
  const graphCanvas = document.getElementById("graphCanvas");

  // Set initial state to frontend
  let currentCategory = "frontend";
  showCategory("frontend");

  // Add event listeners to filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Show the selected category
      showCategory(category);
    });
  });

  // Function to show a specific category
  function showCategory(category) {
    currentCategory = category;
    const data = skillsData[category];

    // Clear the skills container
    skillsContainer.innerHTML = "";

    // Create category element
    const categoryEl = document.createElement("div");
    categoryEl.className = ".tech-skill-category";

    // Add title
    const titleEl = document.createElement("h3");
    titleEl.className = "category-title";
    titleEl.innerHTML = `<i class="fas ${data.icon}"></i> ${data.title}`;
    categoryEl.appendChild(titleEl);

    // Add skills or tools based on category
    if (category === "tools") {
      const toolsGrid = document.createElement("div");
      toolsGrid.className = "tools-grid";

      data.tools.forEach((tool, index) => {
        const toolEl = document.createElement("div");
        toolEl.className = "tool-item";
        toolEl.style.animationDelay = `${index * 0.1}s`;
        toolEl.innerHTML = `
                <div class="tool-label">
                <div class="tool-icon"><i class="fas ${tool.icon}"></i></div>
                <div class="tool-name">${tool.name}</div>
                </div>
                <div class="tool-desc">${tool.desc}</div>
            `;
        toolsGrid.appendChild(toolEl);
      });

      categoryEl.appendChild(toolsGrid);
    } else {
      const skillsList = document.createElement("div");
      skillsList.className = "skills-list";

      data.skills.forEach((skill, index) => {
        const skillEl = document.createElement("div");
        skillEl.className = "skills-item";
        skillEl.style.animationDelay = `${index * 0.1}s`;
        skillEl.innerHTML = `
                <div class="tech-skill-name">${skill.name}</div>
                <div class="skill-meter">
                    <div class="tech-skill-progress pulsing" data-value="${skill.value}" style="background:${skill.color}"></div>
                    <div class="skill-value">${skill.value}%</div>
                </div>
            `;
        skillsList.appendChild(skillEl);
      });

      categoryEl.appendChild(skillsList);
    }

    // Add to container and make visible after a short delay
    skillsContainer.appendChild(categoryEl);
    setTimeout(() => {
      categoryEl.classList.add("visible");

      // Animate progress bars
      if (category !== "tools") {
        setTimeout(() => {
          document
            .querySelectorAll(".tech-skill-progress")
            .forEach((progress) => {
              const value = progress.getAttribute("data-value");
              progress.style.width = value + "%";
            });
        }, 300);
      }
    }, 50);

    // Update the graph
    updateGraph(category);
  }
  // Function to update the graph based on category
  function updateGraph(category) {
    // Clear the graph canvas
    graphCanvas.innerHTML = "";

    const data = graphData[category];

    // Create connections
    data.connections.forEach((conn) => {
      const fromNode = data.nodes.find((n) => n.id === conn.from);
      const toNode = data.nodes.find((n) => n.id === conn.to);

      const line = document.createElement("div");
      line.className = "connection";

      const length = Math.sqrt(
        Math.pow(toNode.x - fromNode.x, 2) + Math.pow(toNode.y - fromNode.y, 2)
      );

      const angle =
        (Math.atan2(toNode.y - fromNode.y, toNode.x - fromNode.x) * 180) /
        Math.PI;

      line.style.width = length + "px";
      line.style.left = fromNode.x + "px";
      line.style.top = fromNode.y + "px";
      line.style.transform = `rotate(${angle}deg)`;

      graphCanvas.appendChild(line);

      // Make visible after a short delay
      setTimeout(() => {
        line.classList.add("visible");
      }, 300);
    });

    // Create nodes
    data.nodes.forEach((node, index) => {
      const nodeEl = document.createElement("div");
      nodeEl.className = "node";
      nodeEl.textContent = node.name;
      nodeEl.style.left = node.x + "px";
      nodeEl.style.top = node.y + "px";

      // Different colors based on category
      if (category === "frontend") {
        nodeEl.style.background = "linear-gradient(145deg, #4facfe, #00f2fe)";
      } else if (category === "backend") {
        nodeEl.style.background = "linear-gradient(145deg, #fa709a, #fee140)";
      } else if (category === "database") {
        nodeEl.style.background = "linear-gradient(145deg, #43e97b, #38f9d7)";
      } else {
        nodeEl.style.background = "linear-gradient(145deg, #a6c0fe, #f68084)";
      }

      graphCanvas.appendChild(nodeEl);

      // Make visible after a short delay with staggered animation
      setTimeout(() => {
        nodeEl.classList.add("visible");
      }, index * 100 + 300);
    });
  }
});
