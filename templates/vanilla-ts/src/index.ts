import { bootup } from "@choiceform/sdk-js/extensions";
import { installExtension } from "@choiceform/sdk-js/ui";

import "./index.css";

function onMessage(this: Window, event: MessageEvent) {
  function initializer() {
    try {
      installExtension(async (root, sdk) => {
        return (await import("./main.ts")).Main(root, sdk);
      });
    } catch (error) {
      throw new TypeError("Extension initialization failed.");
    } finally {
      window.removeEventListener("message", onMessage);
    }
  }

  bootup.call(this, event, initializer);
}

window.addEventListener("message", onMessage, false);
