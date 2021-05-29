import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import Avatar from './Avatar';
import getInitials from '../util/getInitials';
import getAvatarColor from '../util/getAvatarColor';

AuthorRow.propTypes = {
    fullname: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    onPressLinkText: PropTypes.func.isRequired,
};

function AuthorRow(props) {
    const {fullname, linkText, onPressLinkText} = props;
    return (
        <View style={styles.container}>
            <Avatar size={35} initials={getInitials(fullname)} backgroundColor={getAvatarColor(fullname)}/>
            <Text style={styles.text} numberOfLines={1}>{fullname}</Text>
            {!!linkText && (
                <TouchableOpacity onPress={onPressLinkText}>
                    <Text numberOfLines={1}>{linkText}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 10,
    },
    text: {
        flex: 1,
        paddingHorizontal: 6,
    }
})

export default AuthorRow;