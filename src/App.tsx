import { ThemeProvider } from "styled-components";
import { theme } from "app/styles/theme";
import Home from "app/screens/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
