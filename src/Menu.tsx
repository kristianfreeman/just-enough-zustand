import { useShallow } from "zustand/react/shallow"
import { Button } from "@/components/ui/button"
import { useStore } from "./App"

import type { ViewOption } from "./App";

const Menu = () => {
  const viewOptions: ViewOption[] = ["daily", "weekly", "monthly"];
  const [setView, view] = useStore(
    useShallow(state => [state.setView, state.view])
  )

  return (
    <nav className="flex gap-2 justify-center items-center">
      {viewOptions.map((v) => (
        <Button
          variant={v === view ? "default" : "outline"}
          onClick={() => v !== view && setView(v)}
          key={v}
        >
          Trending {v}
        </Button>
      ))}
    </nav>
  );
};

export default Menu;
