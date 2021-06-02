import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const DetailTab = styled.ul`
  display: flex;
  align-items: center;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 10;
  margin-top: 30px;
  max-width: 800px;
`;

const Item = styled.li`
  margin-left: -1px;
  width: 33.33%;
  height: 50px;
  text-align: center;
  background-color: rgba(20, 20, 20, 0.8);
  border: 1px solid #fff;
  border-bottom: 1px solid
    ${(props) => (props.current ? "transparent" : "#fff")};
  transition: border-bottom 0.2s ease;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(
  ({ isMovie, location: { pathname }, match: { url } }) => {
    return (
      <DetailTab>
        <Item current={pathname === `${url}/youtube`}>
          <SLink to={`${url}/youtube`}>Youtube</SLink>
        </Item>
        <Item current={pathname === `${url}/infomation`}>
          <SLink to={`${url}/infomation`}>Infomation</SLink>
        </Item>

        {pathname.includes("movie") ? null : (
          <Item current={pathname === `${url}/seasons`}>
            <SLink to={`${url}/seasons`}>Seasons</SLink>
          </Item>
        )}
      </DetailTab>
    );
  }
);
