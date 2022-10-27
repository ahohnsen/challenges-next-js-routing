import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <a>Home</a>
        <a>Product</a>
        <a>Team</a>
        <a>Account</a>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: DarkSlateGray;
  padding: 1.5rem;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
