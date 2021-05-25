import React from 'react';
import InfomationPresenter from './InfomationPresenter';

export default class InfomationContainer extends React.Component {
    constructor(props) {
        super(props);
        const { companies, countries } = props;
        this.state = {
            companies: companies,
            countries: countries
        };
    }

    render() {
        const { companies, countries } = this.state;
        return <InfomationPresenter companies={companies} countries={countries} />;
    }
}