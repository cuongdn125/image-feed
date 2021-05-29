import React from 'react';
import PropTypes from 'prop-types';
import {FlatList } from 'react-native';

import Card from './Card';
import {getImageFromId} from '../util/api'

CardList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.string.isRequired,
        })
    ).isRequired,
};

function CardList(props) {

    const {items} = props;

    const renderItem = ({item: {id, author}}) => (
        <Card 
            fullname={author}
            image={{uri: getImageFromId(id)}}
        />
    ) 
    

    const keyExtractor = ({id}) => id.toString();

    return (
        <FlatList 
            data={items}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    );
}

export default CardList;