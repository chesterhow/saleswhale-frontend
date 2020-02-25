import React from 'react';
import styled from 'styled-components';

import { ReactComponent as TeamsIcon }  from '../images/icon-teams.svg';
import { ReactComponent as PlusIcon }  from '../images/icon-plus.svg';
import SearchIcon  from '../images/icon-search.svg';

const Header = styled.div`
  background: ${props => props.theme.white};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1), 0px 0px 4px rgba(0, 0, 0, 0.05);
  padding: 0 3rem;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 2rem 0;

  * {
    vertical-align: middle;
  }

  > svg > path {
    fill: ${props => props.theme.grey};
  }
`;

const Bottom = styled.div`
  display: grid;
  grid-template-columns: auto auto auto 1fr;
  justify-items: right;
`;

const Heading = styled.h1`
  display: inline-block;
  margin: 0 1rem;
`;

const Button = styled.button`
  padding: 0.8rem 1rem;
  background: ${props => props.theme.accentGreen};
  color: ${props => props.theme.white};
  border: none;
  border-radius: 4px;

  svg {
    margin-right: 1rem;
  }

  h5 {
    display: inline-block;
    margin: 0;
  }
`;

const Tab = styled.button`
  padding: 0;
  background: none;
  border: none;
  border-bottom: ${props => props.active ? '3px solid' + props.theme.accentBlue : 'none'};
  color: ${props => props.active ? props.theme.accentBlue : props.theme.black};

  h2 {
    margin: 0;
    padding: 0.5rem 1rem;
  }
`;

const Search = styled.input`
  padding-left: 2.5rem;
  border: none;
  background:
    url(${SearchIcon}) no-repeat left 0.8rem center;
  font-size: 1.1rem;

  ::placeholder {
    color: ${props => props.theme.grey};
  }
`;

function Teams() {
  return (
    <div>
      <Header>
        <Top>
          <TeamsIcon />
          <Heading>Teams</Heading>
          <Button>
            <PlusIcon />
            <h5>Create new team</h5>
          </Button>
        </Top>
        <Bottom>
          <Tab active><h2>All</h2></Tab>
          <Tab><h2>Favourites</h2></Tab>
          <Tab><h2>Archived</h2></Tab>
          <Search type="text" placeholder="Search team name ..." />
        </Bottom>
      </Header>
    </div>
  );
}

export default Teams;
