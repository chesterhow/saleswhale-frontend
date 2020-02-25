import React from 'react';
import styled from 'styled-components';

import TeamCard from './TeamCard';

const Container = styled.div`
  background: ${props => props.theme.white};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1), 0px 0px 4px rgba(0, 0, 0, 0.05);

  h2 {
    margin: 0;
  }
`;

const Heading = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid ${props => props.theme.greyLight};

  h2, p {
    margin: 0;
  }
  
  p {
    color: ${props => props.theme.grey};
  }
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  grid-gap: 1rem;
  padding: 2rem;
`;

function TeamsList(props) {
  function renderTeams() {
    return props.teams.map((team) => (
      <TeamCard key={team.id} team={team} />
    ));
  }

  return (
    <Container>
      <Heading>
        <h2>Teams</h2>
        <p>Showing 9 out of 9 teams</p>
      </Heading>
      <List>
        {renderTeams()}
      </List>
    </Container>
  );
}

export default TeamsList;
