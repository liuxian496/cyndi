import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
// import { visualizer } from "rollup-plugin-visualizer";

const utils = [
    "getPrefixNs",
    "isEmptyString",
    "printArrayItem",
    "updateScroll",
];

type entry = {
    [index: string]: string;
};

function getEntry(components: string[]) {
    const value: entry = {};
    components.map((component) => {
        value[component] = `src/${component}.ts`;
    });
    return value;
}

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        copyPublicDir: false,
        cssCodeSplit: true,
        lib: {
            entry: {
                index: "src/index.ts",
                ...getEntry(utils),
            },
            name: "cyndi",
            fileName: "index",
        },
        outDir: "dist",
        rollupOptions: {
            external: [
                "react",
                "react-dom",
                "react/jsx-runtime",
                "lodash/isString",
                "lodash/isArray",
                "lodash/forOwn",
            ],
            output: [
                {
                    format: "es",
                    manualChunks: (id: string) => {
                        if (id.includes("node_modules")) {
                            if (id.includes("lodash")) {
                                console.log("id");
                                return "lodash";
                            }
                            return "vender";
                        }
                        if (id.includes("util/updateScroll")) {
                            return "updateScroll"
                        }
                    },
                    chunkFileNames: "chunks/[name].[hash].js",
                    assetFileNames: "assets/[name][extname]",
                    entryFileNames: "[name].js",
                },
            ],
        },
    },
    plugins: [
        react(),
        dts(),
        // visualizer()
    ],
});
