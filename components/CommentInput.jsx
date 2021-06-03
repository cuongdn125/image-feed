import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, TextInput} from 'react-native';

CommentInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};
CommentInput.defaultProps = {
    placeholder: '',
}

function CommentInput(props) {
    const { onSubmit, placeholder } = props;

    const [text, setText] = useState('');

    const handleChangeText = (text) => {
        setText(text);
    }

    const handleSubmitEditing = () => {
        if(!text) return;
        onSubmit(text);
        setText('');
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                value={text}
                onChangeText={handleChangeText}
                placeholder={placeholder}
                underlineColorAndroid={'transparent'}
                onSubmitEditing={handleSubmitEditing}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        paddingHorizontal: 20,
        height: 60,
    },
    input: {
        flex: 1,
    }
})

export default CommentInput;