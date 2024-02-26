import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidenav } from "../components/Sidenav";
import { accountType } from "../types/account";

const Grid = styled.div`
  display: grid;
  grid-template-columns: [col-start sidenav-start col-1] 1fr [col-2] 1fr [col-3 col-sixth-1 sidenav-end main-start] 1fr [col-4 col-fourth-1] 1fr [col-5 col-third-1 col-sixth-2] 1fr [col-6] 1fr [col-7 col-half col-fourth-2 col-sixth-3] 1fr [col-8] 1fr [col-9 col-third-2 col-sixth-4] 1fr [col-10 col-fourth-3] 1fr [col-11 col-sixth-5] 1fr [col-12] 1fr [col-13 main-end col-end];
  grid-auto-columns: 1fr;
  grid-template-rows: [header-start] 64px [header-end main-start] 1fr [main-end];
  grid-auto-rows: auto;
  grid-template-areas:
    "header header header header header header header header header header header header"
    "sidenav sidenav main main main main main main main main main main";
  grid-auto-flow: row;
  row-gap: 0;
  justify-items: stretch;
  -webkit-align-items: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const GridAreaMain = styled.div`
  padding: 16px 32px;
  grid-column: 3/-1;
`;

const Cell = styled.div(({ style }) => {
  let backgroundColor;
  if (style.gridArea === "header") {
    backgroundColor = "#a8ccff";
  } else if (style.gridArea === "sidenav") {
    backgroundColor = "#fad5ff";
  }

  return {
    width: "100%",
    minWidth: style.gridArea === "sidenav" ? 200 : undefined,
    height: style.gridArea === "header" ? 64 : undefined,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    backgroundColor,
  };
});

export const Root = () => {
  return (
    <Grid>
      <Cell style={{ gridArea: "header" }}>
        <Header />
      </Cell>
      <Cell style={{ gridArea: "sidenav" }}>
        <Sidenav />
      </Cell>
      <GridAreaMain>
        <Outlet />
      </GridAreaMain>
    </Grid>
  );
};

export const loader = async () => {
  const accountId = localStorage.getItem("sessionToken");
  const response = await fetch("/api/data/accounts");
  const accounts = await response.json();

  const account: accountType = accounts.find(
    (account) => account.id === accountId,
  );
  return { account };
};
