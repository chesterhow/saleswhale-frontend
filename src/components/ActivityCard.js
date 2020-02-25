import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 2rem auto;
  grid-column-gap: 0.5rem;
`;

const Image = styled.img`
  width: 2rem;
  border-radius: 50%;
`;

const Info = styled.div`
  display: inline-block;

  p {
    margin: 0;
  }
`;

const Time = styled.p`
  font-size: 0.9rem;
  opacity: 0.5;
`;

const Bold = styled.span`
  font-weight: 600;
`;

function ActivityCard(props) {
  const { person, action, target, created_at } = props.activity;
  let actionText;

  if (action === 'increased_quota') {
    actionText = <span>increased <Bold>{target}</Bold>'s quota.</span>;
  } else if (action === 'added_leads') {
    actionText = <span>added new leads to <Bold>{target}</Bold>.</span>;
  } else if (action === 'archived_team') {
    actionText = <span>archived the team <Bold>{target}</Bold>.</span>;
  }

  return (
    <Container>
      <Image src={person.avatar} alt={person.name} />
      <Info>
        <Bold>{person.name}</Bold> {actionText}
        <Time>{created_at}</Time>
      </Info>
    </Container>
  );
}

export default ActivityCard;
