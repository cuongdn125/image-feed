import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Image, ActivityIndicator} from 'react-native';

import AuthorRow from './AuthorRow';

Card.propTypes = {
    fullname: PropTypes.string.isRequired,
    linkText: PropTypes.string,
    onPressLinkText: PropTypes.func,
    image: Image.propTypes.source.isRequired,
};

Card.defaultProps = {
    linkText: '',
    onPressLinkText: () => {},
}

function Card(props) {
    const {fullname, linkText, onPressLinkText, image} = props;

    const [loading, setLoading] = useState(true);

    const handleLoading = () => {
        setLoading(true);
    }

    return (
        <View >
            <AuthorRow fullname={fullname} linkText={linkText} onPressLinkText={onPressLinkText}/>
            <View >
                {loading && (
                    <ActivityIndicator style={styles.absoluteFill} size={'large'}/>
                )}
                <Image style={styles.image} source={image} onLoad={handleLoading}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        backgroundColor: "rgba(0,0,0,0.02)",
        aspectRatio: 1,
    },
    absoluteFill: {
        position: 'absolute',
        top: 50,
        right: 0,
        bottom: 0,
        left: 0,
    }
})

export default Card;