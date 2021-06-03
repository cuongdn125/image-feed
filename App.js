import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

import Feed from './screens/Feed';
import Comment from './screens/Comment';

const ASYNC_STORAGE_COMMENTS_KEY='ASYNC_STORAGE_COMMENTS_KEY';

export default function App() {

  const [showModal, setShowModal] = useState(false);
  const [commentsForItem, setCommentsForItem] = useState({});
  const [selectedItemId, setSelectedItemId] = useState(null);

  const openCommentScreen = (id) => {
    setShowModal(true);
    setSelectedItemId(id);
  }
  const closeCommentScreen = () => {
    setShowModal(false);
    setSelectedItemId(null);
  }

  const onSubmitComment = (comment) => {
    const comments = commentsForItem[selectedItemId] || [];
    const update = {
      ...commentsForItem,
      [selectedItemId] : [...comments, comment],
    }
    setCommentsForItem(update);
    try{
      AsyncStorage.setItem(ASYNC_STORAGE_COMMENTS_KEY, JSON.stringify(update));
    }catch(e){
      console.log('Failed to save comment', comment, 'for', selectedItemId);
    }
  }
  useEffect(() => {
    async function getData() {
      try {
        const comments = await AsyncStorage.getItem(ASYNC_STORAGE_COMMENTS_KEY);
        setCommentsForItem(comments);
      }catch (e) {
        console.log('Failed to load comments');
      }
  }
  },[]);


  return (
    <View>
      <View style={styles.statusBar} />
      <View style={styles.title} >
        <Text style={styles.text}>Image Feed</Text>
      </View>
      <Feed commentsForItem={commentsForItem} onPressComments={openCommentScreen}/>
      <Modal visible={showModal} animationType='slide' onRequestClose={closeCommentScreen} >
        <Comment comments={commentsForItem[selectedItemId] || []} onClose={closeCommentScreen} onSubmitComment={onSubmitComment}/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: '#C2185B',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    backgroundColor: '#ccc',
  },
  text: {
    fontSize: 30,
  }

});
