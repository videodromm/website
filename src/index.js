import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <h2>{props.headerMessage}</h2>
    );
};

App.propTypes = {
    headerMessage: React.PropTypes.string
};

App.defaultProps = {
    headerMessage: 'VD'
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
