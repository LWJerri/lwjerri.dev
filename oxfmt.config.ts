import { defineConfig } from "oxfmt";

export default defineConfig({
  bracketSpacing: true,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  tabWidth: 2,
  arrowParens: "always",
  printWidth: 120,
  sortTailwindcss: {},
  svelteStrictMode: false,
  sortPackageJson: false,
  ignorePatterns: [".svelte-kit/tsconfig.json", "pnpm-lock.yaml"],
});
