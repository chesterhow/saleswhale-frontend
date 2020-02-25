import React from 'react';
import styled from 'styled-components';

import Teams from './containers/Teams';
import Nav from './containers/Nav';
import Sidebar from './components/Sidebar';
import GlobalStyle from './stylesheets/global-styles';

const Container = styled.div`
  margin-left: 80px;
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
