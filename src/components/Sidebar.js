import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../images/sw-logo-white.svg';
import { ReactComponent as Campaign }  from '../images/icon-campaign.svg';
import { ReactComponent as Teams }  from '../images/icon-teams.svg';
import { ReactComponent as Contacts }  from '../images/icon-leads.svg';
import { ReactComponent as Reports }  from '../images/icon-reports.svg';
import { ReactComponent as Help }  from '../images/icon-help.svg';

const Container = styled.div`
  grid-area: sidebar;
  position: fixed;
  left: 0;
  top: 0;
  display: grid;
  grid-template-rows: repeat(5, auto) 1fr auto;
  justify-items: center;
  align-items: center;
  height: 100vh;
  width: 80px;
  background: ${props => props.theme.accentBlueDark};
  color: ${props => props.theme.white};

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ItemContainer = styled.div`
  position: relative;
  height: 80px;
  width: 100%;
  cursor: pointer;
`;

const LogoItem = styled(ItemContainer)`
  :hover {
    svg > path {
      fill: ${props => props.theme.accentBlue};
    }
  }
`;

const MenuItem = styled(ItemContainer)`
  background: ${props => props.current ? props.theme.accentBlue : 'none'};

  svg {
    opacity: ${props => props.current ? 1 : 0.3};
  }

  :hover {
    svg {
      opacity: 1;
    }
  }
`;

function Sidebar() {
  return (
    <Container>
      <LogoItem>
        <Logo />
      </LogoItem>
      <MenuItem>
        <Campaign />
      </MenuItem>
      <MenuItem current>
        <Teams />
      </MenuItem>
      <MenuItem>
        <Contacts />
      </MenuItem>
      <MenuItem>
        <Reports />
      </MenuItem>
      <br/>
      <MenuItem>
        <Help />
      </MenuItem>
    </Container>
  );
}

export default Sidebar;
