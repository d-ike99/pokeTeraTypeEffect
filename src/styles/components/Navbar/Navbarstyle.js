import styled from "styled-components";

const NavbarStyle = styled.div`
  /* display: grid; */
  top: 0;
  width: 100%;
  background: linear-gradient(#F89174, #FFC778);
  /* box-shadow: 0 2px 4px gray; */
  display: flex;  /* これ追加で、自動的に背景白くなった */
  padding: 8px 5rem;
  z-index: 1000;
  position: fixed;
  height: 60px;
  font-weight: 600;
  font-size: 30px;
  color: black;
`

export { NavbarStyle }