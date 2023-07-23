// Context
import { NewsProvider } from "./Context/NewsProvider"
// MUI
import { Container, Grid, Typography } from "@mui/material"
// Components
import Form from "./Components/Form"

function App() {
  return (
    <NewsProvider>
      <Container>
        <header>
          <Typography
            align="center" marginY={5} component="h1" variant="h3"
          >
            News Search Engine
          </Typography>
        </header>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={4}>
            <Form />
          </Grid>
        </Grid>


      </Container>
    </NewsProvider>
  )
}

export default App
