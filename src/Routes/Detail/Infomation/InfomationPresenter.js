import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const List = styled.div`
  width: 49%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  margin-bottom: 20px;
  display: block;
`;

const InfoContainer = styled.div`
  margin-bottom: 40px;
  margin-bottom: 60px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;

const Item = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 80%;
`;

const InfomationPresenter = ({ companies, countries }) => (
  <Container>
    <List>
      <Title>&lt; Companies &gt;</Title>
      <InfoContainer>
        {companies &&
          companies.length > 0 &&
          companies.map((company) => (
            <Item key={company.id}>
              {company.logo_path ? (
                <Img
                  src={`https://image.tmdb.org/t/p/w300${company.logo_path}`}
                />
              ) : (
                company.name
              )}
            </Item>
          ))}
      </InfoContainer>
    </List>
    <List>
      <Title>&lt; Countries &gt;</Title>
      <InfoContainer>
        {countries &&
          countries.length > 0 &&
          countries.map((country) => (
            <Item key={country.id}>{country.name}</Item>
          ))}
      </InfoContainer>
    </List>
  </Container>
);

InfomationPresenter.propTypes = {
  companies: PropTypes.array.isRequired,
  countries: PropTypes.array.isRequired,
};

export default InfomationPresenter;
