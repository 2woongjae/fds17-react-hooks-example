import React from 'react';

export default function withHasMounted(Component) {
    class C extends React.Component {
        state = {
            hasMounted: false,
        };

        render() {
            return <Component {...this.props} hasMounted={this.state.hasMounted} />
        }

        componentDidMount() {
            this.setState({hasMounted: true});
        }
    }

    return C;
}