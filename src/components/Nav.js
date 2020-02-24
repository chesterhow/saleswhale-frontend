import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Mail } from '../images/icon-mail.svg';
import { ReactComponent as Caret } from '../images/caret-down.svg';

const Container = styled.div`
  grid-area: nav;
  display: grid;
  grid-template-columns: auto auto 1fr;
  background: ${props => props.theme.white};
  justify-items: center;
  align-items: center;
`;

const Appname = styled.h2`
  display: inline-block;
  margin: 0;
  padding: 0 3rem;
  border-right: 1px solid ${props => props.theme.greyLight};
  color: ${props => props.theme.grey};
  line-height: 80px;
  text-transform: uppercase;
`;

const Breadcrumbs = styled.h2`
  display: inline-block;
  margin: 0 2rem;
  font-weight: 400;
`;

const Personal = styled.div`
  justify-self: end;
  padding: 0 3rem;
  height: 100%;

  > * {
    vertical-align: middle;
  }
`;

const Notif = styled.div`
  display: inline-block;
  position: relative;
  height: 100%;
  width: 2.5rem;
  cursor: pointer;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 30%;
  left: 80%;
  transform: translate(-50%, -50%);

  display: block;
  width: 18px;
  height: 18px;
  line-height: 19px;
  box-sizing: content-box;

  border: 2px solid ${props => props.theme.white};
  border-radius: 50%;
  background: ${props => props.theme.accentBlue};
  color: ${props => props.theme.white};
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
`;

const Name = styled.h4`
  display: inline-block;
  margin: 0 0 0 2rem;
  opacity: 0.5;
`;

const Profile = styled.div`
  display: inline-block;
  cursor: pointer;

  > * {
    vertical-align: middle;
  }
`;

const DisplayPicture = styled.div`
  display: inline-block;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  margin: 0 0.6rem;
  background: ${props => props.theme.grey};
`;

function Nav() {
  return (
    <Container>
      <Appname>Narwhal</Appname>
      <Breadcrumbs>Teams</Breadcrumbs>
      <Personal>
        <Notif>
          <Mail />
          <Badge>3</Badge>
        </Notif>
        <Name>Hello, John</Name>
        <Profile>
          <DisplayPicture />
          <Caret />
        </Profile>
      </Personal>
    </Container>
  );
}

export default Nav;