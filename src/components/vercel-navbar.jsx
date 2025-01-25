import { motion } from "framer-motion";
import { useState } from "react";

export function VercelNavbar() {
  const [active, setActive] = useState(items[0]);
  const [isHover, setIsHover] = useState(null);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <ul className="flex flex-wrap md:flex-row items-center justify-center">
        {items.map((item) => (
          <li key={item.id} className="relative">
            <button
              className="py-2 px-5 font-sora relative cursor-pointer duration-300 transition-colors hover:!text-white"
              onClick={() => setActive(item)}
              onMouseEnter={() => setIsHover(item)}
              onMouseLeave={() => setIsHover(null)}
              style={{ color: active.id === item.id ? "#FFF" : "#888888" }}
            >
              {item.tile}
              {isHover?.id === item.id && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 bg-white/10"
                  style={{ borderRadius: 6 }}
                />
              )}
              {active.id === item.id && (
                <motion.div
                  layoutId="active"
                  className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-white"
                />
              )}
              {isHover?.id === item.id && (
                <motion.div
                  layoutId="hover"
                  className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-white"
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const items = [
  { id: 1, tile: "Overview" },
  { id: 2, tile: "Integrations" },
  { id: 3, tile: "Activity" },
  { id: 4, tile: "Domains" },
  { id: 5, tile: "Usage" },
  { id: 6, tile: "AI" },
  { id: 7, tile: "Settings" },
];
