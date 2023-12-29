// khk3

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: {
          100: "#E0E7FF",
          200: "#111827",
        },
        accent: {
          100: "#4F46E5",
          200: "#ddd",
          300: "#E0E7FF",
          400: "#2563eb",
          500: "#6b21a8",
          foreground: "#fff",
        },
        100: "#fff",
      },
      textColor: {
        primary: {
          100: "#4F46E5",
          200: "#6B21A8",
          300: "#9ca3af",
        },
        100: "#000",
        200: "#6b7280",
        300: "#fff",
      },
      borderColor: {
        100: "#4F46E5",
        200: "#6B21A8",
        300: "#2563eb",
      },
    },
  },
  plugins: [],
};



// /** @type {import('tailwindcss').Config} */
// import {nextui} from "@nextui-org/react";
// module.exports = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
//   ],
//   darkMode: ['class', '[data-mode="dark"]'],
//   plugins: [
//     nextui({
//       themes: {
//         light: {
//           colors: {
//             background: "#FFFFFF", // or DEFAULT
//             foreground: "#27272a", // or 50 to 900 DEFAULT
//             primary: {
//               //... 50 to 900
//               foreground: "#FFFFFF",
//               DEFAULT: "#fff",
//             },
//             // ... rest of the colors
//           },
//         },
//         dark: {
//           colors: {
//             background: "#18181b", // or DEFAULT
//             foreground: "#ECEDEE", // or 50 to 900 DEFAULT
//             primary: {
//               //... 50 to 900
//               foreground: "#18181b",
//               DEFAULT: "#18181b",
//             },
//           },
//           // ... rest of the colors
//         }
//       }
//     }),
//
//   ]
// }
