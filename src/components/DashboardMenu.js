import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    padding: theme.spacing(6)
  },
  title: {
    paddingBottom: theme.spacing(6)
  },
  image: {
    // width: 240,
    // height: 240,
    margin: '10px'
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

const DashboardMenu = ({ children, classes, title }) => (
  <Paper className={classes.root}>
    <Typography variant="h4" align="center" className={classes.title}>
      {title}
    </Typography>
    <Grid item align="center">
      <ButtonBase className={classes.image}>
        <img className={classes.img} alt="complex" src="https://img.youtube.com/vi/iECmq0yl6TI/maxresdefault.jpg" />
      </ButtonBase>
    </Grid>
    {children}
  </Paper>
);

export default withStyles(styles)(DashboardMenu);
