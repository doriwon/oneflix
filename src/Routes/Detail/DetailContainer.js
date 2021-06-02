import { movieApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parseId = parseInt(id);
    if (isNaN(parseId)) {
      // parseId === NaN
      return push("/"); //push: 어딘가로 이동
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.movieDetail(parseId));
      } else {
        ({ data: result } = await tvApi.tvDetail(parseId));
      }
      // console.log(result)
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    // console.log(this.state)
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}