import React, {Component} from 'react';

class Detail extends Component {

    // redirect
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/')
        }
    }

    render() {
        const { location } = this.props
        if (location.state) { // route 통해서 왔을때...
            return <span>{location.state.title}</span>
        } else { // 바로 타고 왔을때...
            return null;
        }
    }
}

export default Detail;

