import { Feed } from "../../components/feed/index";
import { Header } from "../../components/header";
import { Highlights } from "../../components/highlights/index";
import { Navbar } from "../../components/navbar";
import { Grid, GridItem } from "../../ui/grid/grid";

export const Home = (props) => {

  
  return (
    <Grid>
      <GridItem>
        <Navbar onClick={props.changePage} />
      </GridItem>
      <GridItem>
        <Header />
        <Highlights />
        <Feed />
      </GridItem>
    </Grid>
  );
};
