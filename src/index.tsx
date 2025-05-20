import { createRoot } from "react-dom/client";
import Counter from "./components/Counter";

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Counter/>
)