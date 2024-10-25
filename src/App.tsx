import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./redux/store"; // Import your Redux store
import AppRouter from "./router";

const cache = createCache({ key: "css", prepend: true });

function App() {
  return (
    <Provider store={store}> {/* Wrap AppRouter with Provider */}
      <CacheProvider value={cache}>
        <div>
          <AppRouter />
        </div>
      </CacheProvider>
    </Provider>
  );
}

export default App;
