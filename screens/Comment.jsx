import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, ViewPropTypes} from 'react-native';

import CommentList from '../components/CommentList';
import CommentInput from '../components/CommentInput';
import NavigationBar from '../components/NavigationBar';

Comment.propTypes = {
    style: ViewPropTypes.style,
    comments: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmitComment: PropTypes.func.isRequired,
};

Comment.defaultProps = {
    style: null,
}

function Comment(props) {
    const {style, comments, onClose, onSubmitComment} = props;
    return (
        <SafeAreaView style={style}>
            <NavigationBar title={'Comment'} leftText={'Close'} onPressLeftText={onClose} />
            <CommentInput placeholder={'Leave a comment'} onSubmit={onSubmitComment}/>
            <CommentList items={comments}/>
        </SafeAreaView>
    );
}

export default Comment;