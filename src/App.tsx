import { ThemeProvider } from "styled-components";
import { theme } from "app/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">Hello!</div>
    </ThemeProvider>
  );
}

export default App;
