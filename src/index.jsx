import React from "react";
import ReactDOMClient from "react-dom/client";
import { DesktopView } from "./screens/DesktopView";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DesktopView />);
