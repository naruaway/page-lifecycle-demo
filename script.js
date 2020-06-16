const key = "page-lifecycle-demo:messages";

update("> " + lifecycle.state);
lifecycle.addEventListener("statechange", (ev) => {
  update(ev.oldState + " > " + ev.newState);
  render();
});

function render() {
  const view = document.getElementById("app-view");
  const ul = document.createElement("ul");
  getState().forEach((s) => {
    const li = document.createElement("li");
    li.textContent = s;
    ul.appendChild(li);
  });
  view.textContent = "";
  view.appendChild(ul);
}

function update(message) {
  const messages = getState();
  messages.push(message);
  localStorage[key] = JSON.stringify(messages);
}

function getState() {
  return JSON.parse(localStorage[key] || "[]");
}

render();

document.getElementById("app-clear-button").onclick = () => {
  delete localStorage[key];
  render();
};
