import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": [
        "warn", // 设为 warn（不阻断构建），也可设为 error（严格阻断）
        {
          allowComments: true, // 允许带注释的 any（必须写注释才不报错）
          allowEmptyNamespaces: false, // 禁止空命名空间中的 any（可选）
        },
      ],
      // 隐式 any 仍禁止（推荐保留，避免遗漏类型标注）
      "@typescript-eslint/no-implicit-any": "error",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
