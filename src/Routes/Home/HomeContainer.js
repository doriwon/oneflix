import React from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "api";

// eslint-disable-next-line
export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    };

    async componentDidMount() {
        try { //실행
            const {
                data: { results: nowPlaying }
            } = await movieApi.nowPlaying(); //async await 실행이 끝날때까지 기다려
            const {
                data: { results: upcoming }
            } = await movieApi.upcoming();
            const {
                data: { results: popular }
            } = await movieApi.popular();
            this.setState({
                nowPlaying,
                upcoming,
                popular,
            })
        } catch { //작동하지 않을 때
            this.setState({
                error: "Can't find movies information."
            })
        } finally { //성공했든 실패했든 실행
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        console.log(this.state)
        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error}
                loading={loading}
            >
            </HomePresenter >
        );
    }
}