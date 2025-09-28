import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js recommended configurations
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Add global ignores
  {
    ignores: ["src/generated/**"], // Replaces .eslintignore for Prisma generated files
  },
  // Add custom rules for TypeScript files
  {
    files: ["**/*.ts", "**/*.tsx"], // Apply to TypeScript and TSX files
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" }, // Ignore variables/args starting with _
      ],
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];

export default eslintConfig;
