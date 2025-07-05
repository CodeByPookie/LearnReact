# clone in vs
    git clone https://github.com/CodeByPookie/LearnReact.git

# React + Vite

Step 1 -> Create Project : npm create vite@latest .
Step 2 -> run : npm install
Step 3 -> run : npm run dev

# Include tailwind
Step 1 -> npm install tailwindcss @tailwindcss/vite
Step 2 -> Configure the Vite plugin in vite.config.ts
   2.1 -> import tailwindcss from '@tailwindcss/vite'
   2.2 ->  plugins: [tailwindcss(),],
Step 2 -> Import Tailwind CSS in index.css
    @import "tailwindcss";

reflink : https://tailwindcss.com/docs/installation/using-vite    