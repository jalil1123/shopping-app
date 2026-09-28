@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f8fafc;
  color: #0f172a;
}

* {
  box-sizing: border-box;
}

button {
  cursor: pointer;
}

img {
  max-width: 100%;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.7);
  border-radius: 9999px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}
