import { useState } from 'react';
import styled from 'styled-components';

const Pos = styled.div`
  position: absolute;
  min-width: 100px;
  z-index: 10;
  top: 50%;
  right: calc(100% + 5px);
  transform: translateY(-50%);
  background-color: black;
  color: white;
  padding: 0.5em 1em;
  border-radius: 5px;
  font-size: 0.8rem;
  opacity: 0.8;
  text-align: left;
`

const Container = styled.div`
  position: relative;
  display: inline-block;
`

const Tooltip = ({ children, content, location }) => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <div
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
      {show && <Pos>{content}</Pos>}
    </Container>
  );
};

export default Tooltip;