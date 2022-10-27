import styled from "styled-components";

const StyledNavLink = styled.a`
  font-size: 1rem;
  padding: 0;
  background: none;
  border: none;
  color: ${({ active }) => (active ? "lime" : "white")};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: black;
  }
`;

export default StyledNavLink;
