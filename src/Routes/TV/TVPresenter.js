import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
    padding: 0 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
    <>
        <Helmet>
            <title>TV Shows | Oneflix</title>
        </Helmet>
        {loading ? (
            <Loader />
        ) : (
            <Container>
                {topRated && topRated.length > 0 && (
                    <Section title="Top Rated TV Shows">
                        {topRated.map(tv => (
                            <Poster
                                key={tv.id}
                                id={tv.id}
                                imageUrl={tv.poster_path}
                                title={tv.original_name}
                                rating={tv.vote_average}
                                year={tv.first_air_date && tv.first_air_date.substring(0, 7)} //값이 null일 경우도 있어서 && 사용
                                isMovie={false}
                            />
                        ))}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title="Popular TV Shows">
                        {popular.map(tv => (
                            <Poster
                                key={tv.id}
                                id={tv.id}
                                imageUrl={tv.poster_path}
                                title={tv.original_name}
                                rating={tv.vote_average}
                                year={tv.first_air_date && tv.first_air_date.substring(0, 7)}
                                isMovie={false}
                            />
                        ))}
                    </Section>
                )}
                {airingToday && airingToday.length > 0 && (
                    <Section title="Airing Today">
                        {airingToday.map(tv => (
                            <Poster
                                key={tv.id}
                                id={tv.id}
                                imageUrl={tv.poster_path}
                                title={tv.original_name}
                                rating={tv.vote_average}
                                year={tv.first_air_date && tv.first_air_date.substring(0, 7)}
                                isMovie={false}
                            />
                        ))}
                    </Section>
                )}
                {error && <Message color="#e74c3c" text={error} />}
            </Container>
        )};
    </>

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default TVPresenter;