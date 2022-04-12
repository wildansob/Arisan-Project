import React from 'react';
import {Avatar} from 'react-native-elements';

const FotoProfile = ({
  size = 'xlarge',
  source = 'https://www.techadvisor.com/cmsdata/slideshow/3651313/iphone_7_plus_selfie_2_thumb800.jpg',
}) => {
  return <Avatar rounded source={{uri: source}} size={size} />;
};

export default FotoProfile;
