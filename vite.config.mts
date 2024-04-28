import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
// import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        copyPublicDir: false,
        cssCodeSplit: true,
        lib: {
            entry: {
                index: "src/index.ts",
                isEmptyString: "src/isEmptyString.ts",
                printArrayItem: "src/printArrayItem.ts",
                getPrefixNs:"src/getPrefixNs.ts"
            },
            name: "cyndi",
            fileName: "index",
        },
        outDir: "dist",
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"],
            output: [
                {
                    manualChunks: (id: string) => {
                        if (id.includes("node_modules")) {
                            if (id.includes("lodash")) {
                                return "lodash";
                            }
                            return "vender";
                        }
                    },
                    format: "es",
                    chunkFileNames: "chunks/[name].[hash].js",
                    assetFileNames: "assets/[name][extname]",
                    entryFileNames: "[name].js",
                },
            ],
        },
    },
    plugins: [
        react(),
        dts()
        // visualizer(),
    ],
});
