import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, ScrollView, Text} from 'react-native';

CommentList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function CommentList(props) {
    const { items } = props;

    return (
        <ScrollView>
            {items.map((item, index) => (
                <View style={styles.comment} key={index}>
                    <Text>{item}</Text>
                </View>))
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    comment: {
        marginLeft: 20,
        paddingVertical: 20,
        paddingRight: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    }
})

export default CommentList;