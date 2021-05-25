import React from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Message from "Components/Message";
import DetailTab from "Components/DetailTab";
import Youtube from "./Youtube";
import Infomation from "./Infomation";
import Seasons from "./Seasons";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 70px;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    justify-content: center;
    z-index: 1;
`;
const Cover = styled.div`
    width: 525px;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 800px;
    margin-left: 10px;
`;

const Title = styled.h1`
    font-size: 32px;
    margin-bottom: 20px;
`;

const ImdbLink = styled.a`
    background: url(https://m.media-amazon.com/images/S/sash/oZ5kbUITU-kLrpY.png) no-repeat center;
    background-size: contain;
    width: 46px;
    height: 22px;
    display: inline-block;
    vertical-align: bottom;
    margin-left: 15px;
`;

const InfoContainer = styled.div`
    margin: 20px 0;
`;

const Info = styled.span`
`;

const Divider = styled.span`
    margin: 0 10px;
`;
const Overview = styled.p`
    font-size: 12px;
    opacity: 0.7;
    line-height: 1.5;
    width: 50%;
`;
const DetailCont = styled.div`
    background: rgba(20,20,20,0.8);
    padding: 30px;
    max-width: 799px;
    height: 546px;
    overflow-y: auto;
`;

const DetailPresenter = ({ result, error, loading, isMovie }) => (
    loading ? (
        <>
            <Helmet>
                <title>Loading | Oneflix</title>
            </Helmet>
            <Loader />
        </>
    ) : error ? (
        <Message />
    ) : (
        <Container>
            <Helmet>
                <title>
                    {result.original_title
                        ? result.original_title
                        : result.original_name} | Oneflix</title>
            </Helmet>
            <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
            <Content>
                <Cover
                    bgImage={
                        result.poster_path
                            ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                            : require("../../assets/noPosterSmall.jpg")
                    }
                />
                <Data>
                    <Title>
                        {result.original_title
                            ? result.original_title
                            : result.original_name}
                        {result.imdb_id ? (
                            <ImdbLink target="_blank" href={`https://www.imdb.com/title/${result.imdb_id}`} />
                        ) : null}
                    </Title>

                    <InfoContainer>
                        <Info>
                            {result.release_date
                                ? result.release_date.substring(0, 7)
                                : result.first_air_date.substring(0, 7)}
                        </Info>
                        <Divider>•</Divider>
                        <Info>
                            {result.runtime ? result.runtime : result.episode_run_time[0]} min
                        </Info>
                        <Divider>•</Divider>
                        <Info>
                            {result.genres &&
                                result.genres.map((genre, index) =>
                                    index === result.genres.length - 1
                                        ? genre.name
                                        : `${genre.name} / `)}
                        </Info>
                    </InfoContainer>
                    <Overview>{result.overview}</Overview>
                    <DetailTab isMovie={isMovie}></DetailTab>
                    <DetailCont>
                        <Route path="/:type/:id/youtube" render={() => <Youtube videos={result.videos.results} />} />
                        <Route path="/:type/:id/infomation" render={() => <Infomation companies={result.production_companies} countries={result.production_countries} />} />
                        <Route path="/tv/:id/seasons" render={() => <Seasons seasons={result.seasons} />} />
                    </DetailCont>
                </Data>
            </Content>
            {isMovie ? <></> : <></>}
        </Container >
    )
);

DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;