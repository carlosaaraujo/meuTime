import { Header } from "./components/Header";
import { AppStateProvider } from "./context/AppStateContext";
import { Router } from "./routes/router";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <AppStateProvider>
      <>
        <Header />
        <Router />
        <GlobalStyle />
      </>
    </AppStateProvider>
  );
}

export default App;
