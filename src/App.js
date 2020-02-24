import React from 'react';
import styled from 'styled-components';

import Teams from './containers/Teams';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import GlobalStyle from './stylesheets/global-styles';

const Container = styled.div`
  display: grid;
  grid-template:
    "sidebar nav" 80px
    "sidebar main" auto
    / 80px auto;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Sidebar />
      <Nav />
      <Teams />
    </Container>
  );
}

export default App;
