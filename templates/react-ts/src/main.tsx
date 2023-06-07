import { useWorkspace } from "@choiceform/sdk-js/ui/react";

export function Main() {
  const workspace = useWorkspace(["name"]);

  return <h1>{workspace.name}</h1>;
}
