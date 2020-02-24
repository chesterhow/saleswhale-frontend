import React from 'react';
import styled from 'styled-components';

import Teams from './containers/Teams';
import Sidebar from './components/Sidebar';
import GlobalStyle from './stylesheets/global-styles';

const Container = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Sidebar />
      <Teams />
    </Container>
  );
}

export default App;
