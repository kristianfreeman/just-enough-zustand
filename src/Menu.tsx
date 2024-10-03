import React from "react";
import { Button } from "./components/ui/Button"
import { useStore } from "./App"

const Menu = () => {
  const viewOptions = ["daily", "weekly", "monthly"];
  const {view, setView} = useStore();

  return (
    <nav className="flex gap-2 justify-center items-center">
      {viewOptions.map((v) => (
        <Button
          variant={v === view ? "primary" : "secondary"}
          onClick={() => setView(v)}
          key={v}
        >
          Trending {v}
        </Button>
      ))}
    </nav>
  );
};

export default Menu;
