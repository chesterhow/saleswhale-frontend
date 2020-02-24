import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: ${props => props.theme.accentBlue};
  height: 100%;
  width: 80px;
`;

function Sidebar() {
  return (
    <Container>Sidebar</Container>
  );
}

export default Sidebar;
