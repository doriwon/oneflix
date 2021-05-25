import React from 'react';
import YoutubePresenter from './YoutubePresenter';

export default class YoutubeContainer extends React.Component {
    constructor(props) {
        super(props);
        const { videos } = props;
        this.state = { videos: videos };
    }

    render() {
        const { videos } = this.state;
        return <YoutubePresenter videos={videos} />
    }
}