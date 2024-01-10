import { Box, Grid } from "@mui/material";
import Calculator from "./components/calculator";
import Container from "@mui/material/Container";

function App() {
  return (
    <Box m={5}>
      <Container maxWidth="xs">
        <Calculator />
      </Container>
    </Box>
  );
}

export default App;
