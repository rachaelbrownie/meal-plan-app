import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Menu = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-self: start;

  a {
    padding: 8px;
    color: #8d1ba9;
    text-decoration: none;
    border-bottom: 1px solid #8d1ba9;
  }
`;

const Sidenav = function () {
  return (
    <Menu>
      <Link to="page/account">My account</Link>
      <Link to="page/fridge">Fridge</Link>
      <Link to="page/saved">Meal plans</Link>
      <Link to="page/new">New meal plan</Link>
    </Menu>
  );
};

export { Sidenav };
1;
