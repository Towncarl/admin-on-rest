import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import pure from 'recompose/pure';

const UrlTextField = ({ source,textSource, record = {}, elStyle }) => (
    <a href={get(record, source)} style={elStyle}>
        {get(record, textSource)}
    </a>
);

UrlTextField.propTypes = {
    addLabel: PropTypes.bool,
    elStyle: PropTypes.object,
    label: PropTypes.string,
    textSource: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};

const PureUrlTextField = pure(UrlTextField);

PureUrlTextField.defaultProps = {
    addLabel: true,
};

export default PureUrlTextField;
