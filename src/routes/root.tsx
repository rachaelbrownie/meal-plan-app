import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { Header } from "../components/Header";
import { Sidenav } from "../components/Sidenav";
import { Grid, gridAreas, layoutModes } from "@mirantis/mds-grid";

const Cell = styled.div(({ theme, style }) => {
  let backgroundColor;
  if (style.gridArea === gridAreas.HEADER) {
    backgroundColor = theme.color.background.header1;
  } else if (style.gridArea === gridAreas.SIDENAV) {
    backgroundColor = "rgba(0, 255, 0, 0.25)";
  } else if (style.gridArea === gridAreas.MAIN) {
    backgroundColor = "none";
  }

  return {
    width: "100%",
    minWidth: style.gridArea === gridAreas.SIDENAV ? 200 : undefined,
    height: style.gridArea === gridAreas.HEADER ? 64 : undefined,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.v1.color.text.text1,
    backgroundColor,
  };
});

export const Root = () => {
  return (
    <Grid layoutMode={layoutModes.APPLICATION}>
      <Cell style={{ gridArea: gridAreas.HEADER }}>
        <Header />
      </Cell>
      <Cell style={{ gridArea: gridAreas.SIDENAV }}>
        <Sidenav />
      </Cell>
      <Cell style={{ gridArea: gridAreas.MAIN }}>
        <Outlet />
      </Cell>
    </Grid>
  );
};
