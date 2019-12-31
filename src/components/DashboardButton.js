import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const DashboardButton = ({ children, to }) => (
  <Button component={Link} to={to} variant="contained" color="primary" size="large" fullWidth>
    {children}
  </Button>
);

export default DashboardButton;
