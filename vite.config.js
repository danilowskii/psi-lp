import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // ← linha que falta

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
