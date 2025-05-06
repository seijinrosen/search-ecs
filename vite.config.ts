import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// JSTでのビルド日時を生成
function getJstIsoString() {
  const date = new Date();
  const jstDate = new Date(date.getTime() + 9 * 60 * 60 * 1000); // UTC+9
  return jstDate.toISOString().replace("T", " ").replace("Z", " +09:00");
}

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __BUILD_DATE__: JSON.stringify(getJstIsoString()),
  },
  plugins: [react()],
});
