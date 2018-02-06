import React from 'react';
import ReactDom from 'react-dom';

export class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return ReactDom.render(<h1>hello world</h1>);
    }
}

export default Index;