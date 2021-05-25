import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: column;
`;

const ImageContainer = styled.div`
	display: flex;
	flex-flow: wrap;
	justify-content: space-between;
    iframe{
        width: 400px;
        height: 250px;
    }
`;

const Img = styled.img`
	width: 47%;
	margin-bottom: 30px;
`;

const SeasonsPresenter = ({ seasons }) => (
	<Container>
		<ImageContainer>
			{seasons && seasons.length > 0 && seasons.map((season) => (season.poster_path ? <Img key={season.id} src={`https://image.tmdb.org/t/p/w300${season.poster_path}`} /> : season.name))}
		</ImageContainer>
	</Container>
);

SeasonsPresenter.propTypes = {
	seasons: PropTypes.array.isRequired,
};

export default SeasonsPresenter;