import React from "react";

import { Dashboard, DashboardMenu, DashboardButton } from "../../components";

const HomePage = () => (
  <Dashboard>
    <DashboardMenu title="Título">
      <DashboardButton to="/form">Avançar</DashboardButton>
    </DashboardMenu>
  </Dashboard>
);

export default HomePage;
