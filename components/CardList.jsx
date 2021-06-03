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
        }),
      ).isRequired,
      commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
        .isRequired,
      onPressComments: PropTypes.func.isRequired,
};

function CardList(props) {

    const {items, commentsForItem, onPressComments} = props;

    const renderItem = ({item: {id, author}}) => {
        const comments = commentsForItem[id];


        return(
            <Card 
                fullname={author}
                image={{uri: getImageFromId(id)}}
                linkText={`${comments ? comments.length : 0} Comments`}
                onPressLinkText={() => {onPressComments(id)}}
            />
        )
    }
    

    const keyExtractor = ({id}) => id.toString();

    return (
        <FlatList 
            data={items}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            extraData={commentsForItem}
        />
    );
}

export default CardList;