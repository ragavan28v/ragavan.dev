import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  resolve: {
    alias: {
      'lucide-react': fileURLToPath(
        new URL('./node_modules/lucide-react/dist/cjs/lucide-react.js', import.meta.url)
      ),
    },
  },
});
