import React from "react";
import { Button } from "./components/ui/Button"
import { useStore } from "./App"

const Menu = () => {
  const viewOptions = ["daily", "weekly", "monthly"];
  const setView = useStore(state => state.setView)
  const view = useStore(state => state.view)

  return (
    <nav className="flex gap-2 justify-center items-center">
      {viewOptions.map((v) => (
        <Button
          variant={v === view ? "" : "outline"}
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
