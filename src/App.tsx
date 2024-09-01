import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import "./App.css";
import AppRouter from "./router";

// Create an emotion cache instance
const cache = createCache({ key: "css", prepend: true });

function App() {
  return (
    <CacheProvider value={cache}>
      <div>
        <AppRouter />
      </div>
    </CacheProvider>
  );
}

export default App;
