import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

const styles = {
    list: {
        display: 'flex',
        listStyleType: 'none',
    },
    image: {
        margin: '0.5rem',
        maxHeight: '100%',
        maxWidth: '100%'
    },
};

export const RelativeImageField = ({ elStyle = {}, record, source, src, title,relativePath }) => {
    const sourceValue = get(record, source);
    if (!sourceValue) {
        return <div />;
    }

    if (Array.isArray(sourceValue)) {
        const style = {
            ...styles.list,
            ...elStyle,
        };
        return (
            <ul style={style}>
                {sourceValue.map((file, index) => {
                    const titleValue = get(file, title) || title;
                    let srcValue = get(file, src) || title;
                    //TC: support relative images
                    if(relativePath){
                        srcValue = relativePath+srcValue;
                    }
                    return (
                        <li key={index}>
                            <img
                                alt={titleValue}
                                title={titleValue}
                                src={srcValue}
                                style={styles.image}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }

    const titleValue = get(record, title) || title;
    //TC: support relative images
    let srcValue = sourceValue;
    if(relativePath){
        srcValue = relativePath+srcValue;
    }
    return (
        <div style={elStyle}>
            <img
                title={titleValue}
                alt={titleValue}
                src={srcValue}
                style={styles.image}
            />
        </div>
    );
};

RelativeImageField.propTypes = {
    elStyle: PropTypes.object,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
    title: PropTypes.string,
    relativePath: PropTypes.string,
};

export default RelativeImageField;
