import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {ViewPropTypes, ActivityIndicator, Text, SafeAreaView} from 'react-native';

import {fetchImages} from '../util/api';

import CardList from '../components/CardList';


Feed.propTypes = { 
    style: ViewPropTypes.style,
    commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    onPressComments: PropTypes.func.isRequired,
};

Feed.defaultProps = {
    style: null,
}

function Feed(props) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [items, setItems] = useState([]);

    const {style, commentsForItem, onPressComments} = props;

    useEffect(() => {
        fetchData();
    })

    const fetchData = async () => {
        try {
            const newItems = await fetchImages();
            setItems(newItems);
            setLoading(false);
        }catch (e) {
            setLoading(false);
            setError(true);
        }
    }

    if(loading) {
        return <ActivityIndicator size={'large'}/>
    }
    if(error) {
        return <Text>Error...</Text>
    }
    return (
        <SafeAreaView style={style}>
            <CardList items={items} commentsForItem={commentsForItem} onPressComments={onPressComments}/>
        </SafeAreaView>
    )
}

export default Feed;