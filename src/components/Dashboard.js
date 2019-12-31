import React from "react";
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    height: "100vh",
    backgroundColor: "#eb7a34"
  }
};

const Dashboard = ({ children, classes }) => (
  <Container className={classes.root} alignItems="center" justify="center">
    {children}
  </Container>
);

export default withStyles(styles)(Dashboard);
