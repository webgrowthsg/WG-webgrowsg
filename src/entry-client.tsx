import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App";
import "./main.css";

export const createRoot = ViteReactSSG({ routes }, () => {}, {});
