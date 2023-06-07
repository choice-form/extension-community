import { bootup } from "@choiceform/sdk-js/extensions";
import { installExtension } from "@choiceform/sdk-js/ui/react";

import "./index.css";
import { Main } from "./main";

function onMessage(event) {
  function initializer() {
    try {
      installExtension(Main);
    } catch (error) {
      throw new TypeError("Extension is not a valid React element!");
    } finally {
      window.removeEventListener("message", onMessage);
    }
  }

  bootup.call(this, event, initializer);
}

window.addEventListener("message", onMessage, false);
