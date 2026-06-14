const steps = [
    {
      stack: ["global()"],
      console: [],
      desc: "<strong>Step 1 — Global execution context</strong><br>JavaScript starts running. The <code>global()</code> execution context is pushed onto the call stack. The engine encounters the <code>hungry()</code> call on the last line."
    },
    {
      stack: ["global()", "hungry()"],
      console: [],
      desc: "<strong>Step 2 — hungry() is called</strong><br><code>hungry()</code> is pushed onto the stack. Execution jumps into the function body. The <code>console.log</code> inside it is about to run."
    },
    {
      stack: ["global()", "hungry()"],
      console: [{ type: "log", text: "I am hungry" }],
      desc: "<strong>Step 3 — console.log runs inside hungry()</strong><br><code>\"I am hungry\"</code> is printed to the console. Next, <code>hungry()</code> calls <code>prepareFood()</code> and will return its result."
    },
    {
      stack: ["global()", "hungry()", "prepareFood()"],
      console: [{ type: "log", text: "I am hungry" }],
      desc: "<strong>Step 4 — prepareFood() is called</strong><br><code>prepareFood()</code> is pushed on top of the stack. Execution pauses inside <code>hungry()</code> and jumps into <code>prepareFood()</code>."
    },
    {
      stack: ["global()", "hungry()", "prepareFood()", "eatFood()"],
      console: [
        { type: "log", text: "I am hungry" },
        { type: "log", text: "Preparing food" }
      ],
      desc: "<strong>Step 5 — eatFood() is called</strong><br><code>\"Preparing food\"</code> is logged. <code>eatFood()</code> is pushed on top — this is the deepest point of the call stack in this program."
    },
    {
      stack: ["global()", "hungry()", "prepareFood()"],
      console: [
        { type: "log", text: "I am hungry" },
        { type: "log", text: "Preparing food" },
        { type: "log", text: "Eating food" },
        { type: "ret", text: "↩ eatFood() returns \"Done\"" }
      ],
      desc: "<strong>Step 6 — eatFood() finishes and is popped</strong><br><code>\"Eating food\"</code> is logged. <code>eatFood()</code> returns <code>\"Done\"</code> and is <em>popped</em> off the stack. Control returns to <code>prepareFood()</code>."
    },
    {
      stack: ["global()", "hungry()"],
      console: [
        { type: "log", text: "I am hungry" },
        { type: "log", text: "Preparing food" },
        { type: "log", text: "Eating food" },
        { type: "ret", text: "↩ eatFood() returns \"Done\"" },
        { type: "ret", text: "↩ prepareFood() returns \"Done\"" }
      ],
      desc: "<strong>Step 7 — prepareFood() finishes and is popped</strong><br><code>prepareFood()</code> passes the return value up to <code>hungry()</code> and is popped. The stack shrinks back to two frames."
    },
    {
      stack: ["global()"],
      console: [
        { type: "log", text: "I am hungry" },
        { type: "log", text: "Preparing food" },
        { type: "log", text: "Eating food" },
        { type: "ret", text: "↩ eatFood() returns \"Done\"" },
        { type: "ret", text: "↩ prepareFood() returns \"Done\"" },
        { type: "ret", text: "↩ hungry() returns \"Done\"" },
        { type: "out", text: "> Done" }
      ],
      desc: "<strong>Step 8 — All done!</strong><br><code>hungry()</code> returns <code>\"Done\"</code> to the global context and is popped. The final <code>console.log(result)</code> prints <code>\"Done\"</code>. Only the global context remains — execution is complete."
    }
  ];
  
  const frameClass = {
    "global()":     "global",
    "hungry()":     "hungry",
    "prepareFood()":"prepare",
    "eatFood()":    "eat"
  };
  
  let current = 0;
  
  function render() {
    const s = steps[current];
    const total = steps.length;
  
    // Step label & progress
    document.getElementById("step-label").textContent = `Step ${current + 1} of ${total}`;
    document.getElementById("progress-bar").style.width = `${((current + 1) / total) * 100}%`;
  
    // Stack
    const stackBox = document.getElementById("stack-box");
    stackBox.innerHTML = "";
  
    if (s.stack.length === 0) {
      const em = document.createElement("div");
      em.className = "empty-msg";
      em.textContent = "Stack is empty";
      stackBox.appendChild(em);
    } else {
      s.stack.forEach((fname, i) => {
        const frame = document.createElement("div");
        frame.className = `frame ${frameClass[fname] || "global"}`;
        const isActive = i === s.stack.length - 1;
        frame.innerHTML = `<span>${fname}</span><span class="ftag">${isActive ? "▲ active" : ""}</span>`;
        stackBox.appendChild(frame);
      });
      const lbl = document.createElement("div");
      lbl.className = "stack-bottom";
      lbl.textContent = "— bottom of stack —";
      stackBox.appendChild(lbl);
    }
  
    // Console
    const consoleBox = document.getElementById("console-box");
    consoleBox.innerHTML = "";
  
    if (s.console.length === 0) {
      const ph = document.createElement("span");
      ph.className = "console-placeholder";
      ph.textContent = "// output appears here";
      consoleBox.appendChild(ph);
    } else {
      s.console.forEach(line => {
        const div = document.createElement("div");
        div.className = `console-line ${line.type}`;
        div.innerHTML = `<span class="cl-icon">›</span><span>${line.text}</span>`;
        consoleBox.appendChild(div);
      });
    }
  
    // Description
    document.getElementById("phase-desc").innerHTML = s.desc;
  }
  
  function next()  { if (current < steps.length - 1) { current++; render(); } }
  function prev()  { if (current > 0) { current--; render(); } }
  function reset() { current = 0; render(); }
  
  // Keyboard support
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft")  prev();
    if (e.key === "r" || e.key === "R") reset();
  });
  
  render();