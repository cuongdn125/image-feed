import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View} from 'react-native';

const Avatar = (props) => {

  const { size, backgroundColor, initials } = props;


  return (
    <View style={[styles.avatar, {backgroundColor: backgroundColor}, {width: size}, {height: size}, {borderRadius: size/2}, styles.container]}>
      <Text >
        {initials}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

Avatar.propTypes = {
  size: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
}

export default Avatar
