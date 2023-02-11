import { Feed } from "./components/feed/feed";
import { Header } from "./components/header";
import { Highlights } from "./components/highlights/highlihts";
import { Navbar } from "./components/navbar";
import { Grid, GridItem } from "./ui/grid/grid";


function App() {
  return (
    <Grid>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Header />
        <Highlights />
        <Feed />
      </GridItem>
    </Grid>

  );
}

export default App;
