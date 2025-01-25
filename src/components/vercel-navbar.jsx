import { motion } from "framer-motion";
import { useState } from "react";

export function VercelNavbar() {
  const [active, setActive] = useState(items[0]);
  const [isHover, setIsHover] = useState(null);
  return (
    <main className="relative w-full min-h-screen flex items-start md:items-center justify-center px-4 py-10">
      <div className="relative">
        <ul className="flex items-center justify-center">
          {items.map((item) => (
            <li key={item.id}>
              <button
                className="py-2 relative cursor-pointer duration-300 transition-colors hover:!text-white"
                onClick={() => setActive(item)}
                onMouseEnter={() => setIsHover(item)}
                onMouseLeave={() => setIsHover(null)}
                style={{ color: active.id === item.id ? "#FFF" : "#888888" }}
              >
                <div className="px-5 py-2 relative font-sora">
                  {item.tile}
                  {isHover?.id === item.id && (
                    <motion.div
                      layoutId="hover-bg"
                      className="absolute bottom-0 left-0 right-0 w-full h-full bg-white/10"
                      style={{ borderRadius: 6 }}
                    />
                  )}
                </div>
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
    </main>
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
