import { AppStateProvider } from "./context/AppStateContext";
import { Router } from "./routes/router";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <AppStateProvider>
      <>
        <GlobalStyle />
        <Router />
      </>
    </AppStateProvider>
  );
}

export default App;
