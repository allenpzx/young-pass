import React from 'react';
import { message } from 'antd';

const ErrorBoundary = () => {
    return class extends React.Component {

        constructor(props) {
            super(props);
            this.state = { error: null, errorInfo: null };
        }

        componentDidCatch(error, errorInfo) {
            this.setState({
              error: error,
              errorInfo: errorInfo
            })
        }

        render(){
            return(
                <React.Fragment>
                    {
                        this.state.error
                        && message.loadin(this.state.error.toString(), 0)
                    }
                    {
                        this.state.error
                        && message.loadin(this.state.errorInfo.componentStack, 0)
                    }
                    {this.props.children}
                </React.Fragment>
            );
        }
    }
}

export {ErrorBoundary}