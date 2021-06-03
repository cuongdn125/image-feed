import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

NavigationBar.propTypes = {
    title: PropTypes.string,
    leftText: PropTypes.string,
    onPressLeftText: PropTypes.func,
};

NavigationBar.defaultProps = {
    title: '',
    leftText: '',
    onPressLeftText: () => {},
}

function NavigationBar(props) {
    const { title, leftText, onPressLeftText } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.leftText} onPress={onPressLeftText}>
                <Text>{leftText}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftText: {
        position: 'absolute',
        left: 50,
        bottom: 0,
        top: 0,
        justifyContent: 'center',
    },
    title: {
        'fontWeight': '500',
    },
})

export default NavigationBar;