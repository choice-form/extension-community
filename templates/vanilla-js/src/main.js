const consoleFormat =
  "background: #545454; color: #cdcdcd; border-radius: 0.2rem; margin-bottom: 0.2rem; padding: 0.4rem; font-size: 0.8rem; font-weight: bold;";

export function Main(root, sdk) {
  console.info("%cYou can access the root element:", consoleFormat, "\n", root);
  console.info("%cYou can use the models from SDK:", consoleFormat, "\n", sdk);

  const { name, themeColor } = sdk.workspace;
  const header = document.createElement("h1");
  header.textContent = name;
  header.style.color = themeColor;
  root.appendChild(header);

  sdk.workspace.watch(["themeColor"], () => {
    header.style.color = sdk.workspace.themeColor;
  });
}
