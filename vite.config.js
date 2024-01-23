import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/GGCS/",
    resolve: {
        alias: {
            src: "/src",
        },
    },
});
