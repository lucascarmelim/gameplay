import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  // const uri = 'https://gamersurffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg';
  const uri = 'https://www.freepnglogos.com/uploads/discord-logo-png/discord-icon-24.png';

  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  );
}