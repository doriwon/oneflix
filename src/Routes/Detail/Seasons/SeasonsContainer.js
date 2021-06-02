import React from "react";
import SeasonsPresenter from "./SeasonsPresenter";

export default class SeasonsContainer extends React.Component {
  constructor(props) {
    super(props);
    const { seasons } = props;
    this.state = { seasons: seasons };
  }

  render() {
    const { seasons } = this.state;
    return <SeasonsPresenter seasons={seasons} />;
  }
}
