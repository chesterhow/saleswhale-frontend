import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchTeams, fetchActivities } from '../actions';
import TeamsList from '../components/TeamsList';
import Activities from '../components/Activities';

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
  cursor: pointer;

  svg {
    margin-right: 1rem;
  }

  h5 {
    display: inline-block;
    margin: 0;
  }

  :hover {
    opacity: 0.7;
  }
`;

const Tab = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  border-bottom: 3px solid ${props => props.active ? props.theme.accentBlue : props.theme.white};
  color: ${props => props.active ? props.theme.accentBlue : props.theme.black};
  cursor: pointer;

  h2 {
    margin: 0;
    padding: 0.5rem 1rem;
  }

  :hover {
    color: ${props => props.active ? props.theme.accentBlue : props.theme.accentBlueDark};
    border-bottom: 3px solid ${props => props.active ? props.theme.accentBlue : props.theme.accentBlueDark};
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

const Content = styled.div`
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 21rem;
  grid-column-gap: 2rem;
  align-items: start;
`;

class Teams extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 1,
      teams: []
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  componentDidMount() {
    const { dispatch, fetchTeams, fetchActivities } = this.props;
    dispatch(fetchTeams());
    dispatch(fetchActivities());
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.teamsIsFetching && !this.props.teamsIsFetching) {
      this.setState((state, props) => ({
        teams: props.teams
      }));
    }

    if (prevState.tab !== this.state.tab) {
      let teams = this.props.teams;

      if (this.state.tab === 2) {
        teams = teams.filter(team => team.is_favorited);
      } else if (this.state.tab === 3) {
        teams = teams.filter(team => team.is_archived);
      }

      this.setState(() => ({
        teams: teams
      }));
    }
  }

  handleTabClick(tab) {
    if (tab !== this.state.tab) {
      this.setState(() => ({
        tab: tab
      }));
    }
  }

  render() {
    const { teams, activities } = this.props;

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
            <Tab
              active={this.state.tab === 1}
              onClick={() => this.handleTabClick(1)}
            >
              <h2>All</h2>
            </Tab>
            <Tab
              active={this.state.tab === 2}
              onClick={() => this.handleTabClick(2)}
            >
              <h2>Favourites</h2>
            </Tab>
            <Tab
              active={this.state.tab === 3}
              onClick={() => this.handleTabClick(3)}
            >
              <h2>Archived</h2>
            </Tab>
            <Search type="text" placeholder="Search team name ..." />
          </Bottom>
        </Header>
        <Content>
          <TeamsList teams={this.state.teams} total={teams.length} />
          <Activities activities={activities} />
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  teams: state.teams.teams,
  teamsIsFetching: state.teams.isFetching,
  activities: state.activities.activities,
  activitiesIsFetching: state.activities.isFetching,
  fetchTeams: fetchTeams,
  fetchActivities: fetchActivities
})

export default connect(mapStateToProps)(Teams);
