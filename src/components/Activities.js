import React from 'react';
import styled from 'styled-components';

import ActivityCard from './ActivityCard';

const Container = styled.div`
  background: ${props => props.theme.white};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1), 0px 0px 4px rgba(0, 0, 0, 0.05);
`;

const Heading = styled.h2`
  margin: 0;
  padding: 2rem;
  border-bottom: 1px solid ${props => props.theme.greyLight};
`;

const List = styled.div`
  display: grid;
  grid-template-rows: repeat(auto);
  grid-row-gap: 1rem;
  padding: 2rem;
`;

function Activites(props) {
  function renderActivities() {
    return props.activities.map(activity => (
      <ActivityCard key={activity.id} activity={activity} />
    ));
  }

  return (
    <Container>
      <Heading>Activities</Heading>
      <List>
        {renderActivities()}
      </List>
    </Container>
  );
}

export default Activites;
