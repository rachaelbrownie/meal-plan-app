import styled from "@emotion/styled";
import { ProdControlPlaneIcon } from "@mirantis/mds-icon";
import { Grid } from "@mirantis/mds-grid";

const StyledHeader = styled.header`
  flex: 1;
  color: ${({ theme }) => theme.color.text.header1};
`;

const Logo = styled.div`
  color: white;
  font-size: 20px;
  font-family: "Open Sans", Roboto, sans-serif;
  display: flex;
  alignitems: center;
  gap: 8px;
`;

export const Header = () => (
  <StyledHeader>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr max-content",
        gap: "16px",
        margin: "0 16px",
        alignItems: "center",
      }}
    >
      <Logo>
        <ProdControlPlaneIcon color="white" /> Mirantis Kubernetes Engine
      </Logo>
      <div>user</div>
    </div>
  </StyledHeader>
);
