import styled from "@emotion/styled";

const StyledHeader = styled.header`
  flex: 1;
`;

const Logo = styled.h1`
  font-size: 20px;
  font-family: "Open Sans", Roboto, sans-serif;
  display: flex;
  alignitems: center;
  gap: 8px;
  margin: 0;
  padding: 0;
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
      <Logo>Epic meal planner</Logo>
      <div>menu icon</div>
    </div>
  </StyledHeader>
);
