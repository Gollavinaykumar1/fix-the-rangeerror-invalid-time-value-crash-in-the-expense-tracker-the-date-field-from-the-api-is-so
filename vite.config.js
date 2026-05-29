import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/fix-the-rangeerror-invalid-time-value-crash-in-the-expense-tracker-the-date-field-from-the-api-is-so/",
  build: { outDir: "dist", assetsDir: "assets" },
  server: { port: 3000 },
});
