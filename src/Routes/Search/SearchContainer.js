import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "api";

// eslint-disable-next-line
export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        error: null,
        loading: false
    };

    /*
    searchTerm: "검색", 단어 넣고 테스트용
    componentDidMount() {
        this.handleSubmit();
    }*/

    handleSubmit = () => {
        const { searchTerm } = this.state;
        if (searchTerm !== "") {
            this.searchByTerm();

        }
    }
    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.setState({ loading: true });
        try {
            const {
                data: { movieResults }
            } = await movieApi.search(searchTerm);
            const {
                data: { tvResults }
            } = await tvApi.search(searchTerm);
            this.setState({
                movieResults,
                tvResults
            })
        } catch {
            this.setState({
                error: "Can't find results."
            });
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        const { movieResults, tvResults, searchTerm, error, loading } = this.state;
        console.log(this.state)
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
                handleSubmit={this.handleSubmit}
            >
            </SearchPresenter>
        );
    }
}
