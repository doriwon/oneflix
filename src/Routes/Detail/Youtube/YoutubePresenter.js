import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
`;

const IframeContainer = styled.div`
    margin-bottom: 30px;
    width: 48%;
    iframe{
        width: 100%;
        height: 250px;
    }
`;

const YoutubePresenter = ({ videos }) => (
    <Container>
        {videos &&
            videos.length > 0 &&
            videos.map((video) => (
                <IframeContainer key={video.id}>
                    <iframe
                        title={video.name}
                        src={`https://www.youtube.com/embed/${video.key}`}
                        allow="accelerometer; autoplay; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </IframeContainer>
            ))}
    </Container>
);

YoutubePresenter.propTypes = {
    videos: PropTypes.array.isRequired,
};

export default YoutubePresenter;