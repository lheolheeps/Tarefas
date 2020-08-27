import React from 'react';
import { Text } from 'react-native';

export default props => <Text {...props} style={[{fontVariant: ['small-caps']}, props.style]}>{props.children}</Text>