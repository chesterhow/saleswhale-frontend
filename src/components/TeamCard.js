import React from 'react';
import styled from 'styled-components';

import { ReactComponent as StarDefault }  from '../images/icon-star-default.svg';
import { ReactComponent as StarActive }  from '../images/icon-star-active.svg';
import { ReactComponent as LeadsIcon }  from '../images/icon-leads-small.svg';
import { ReactComponent as ConvoIcon }  from '../images/icon-conversations.svg';

const Container = styled.div`
  border: 1px solid ${props => props.theme.greyLight};
  border-radius: 4px;
  background: ${props => props.archived ? props.theme.greyLightAlt : 'none'};
`;

const Top = styled.div`
  display: grid;
  grid-template:
    "image title star"
    "description description description"
    / 2.3rem 1fr auto;
  grid-gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.greyLight};
`;

const Image = styled.img`
  grid-area: image;
  width: 100%;
  border-radius: 4px;
`;

const Title = styled.div`
  grid-area: title;

  * {
    margin: 0;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.5;
  }
`;

const Description = styled.p`
  grid-area: description;
  margin: 0;
`;

const Bottom = styled.div`
  padding: 1rem;
  opacity: 0.45;

  p {
    display: inline-block;
    margin: 0;
    padding: 0 1rem 0 0.5rem;
    vertical-align: middle;
    color: ${props => props.theme.black};
    font-size: 0.9rem;
  }

  svg {
    height: 1rem;
    vertical-align: middle;
  }

  svg > path {
    fill: ${props => props.theme.black};
    opacity: 1;
  }
`;

function TeamCard(props) {
  const { name, image, created_at, is_archived, is_favorited,
    description, campaigns_count, leads_count } = props.team;
  return (
    <Container archived={is_archived}>
      <Top>
        <Image src={image} alt={name} />
        <Title>
          <h3>{name}</h3>
          <p>{is_archived ? 'Archived' : created_at ? 'Created on ' + created_at : ''}</p>
        </Title>
        {is_favorited ? <StarActive /> : <StarDefault />}
        <Description>{description}</Description>
      </Top>
      <Bottom>
        <ConvoIcon />
        <p>{campaigns_count} Campaigns</p>
        <LeadsIcon />
        <p>{leads_count} Leads</p>
      </Bottom>
    </Container>
  );
}

export default TeamCard;
