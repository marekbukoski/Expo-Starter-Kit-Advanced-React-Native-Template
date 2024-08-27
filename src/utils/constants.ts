import { Dimensions } from 'react-native';

export const useConstants = () => {
  const dim = Dimensions.get('screen');

  return {
    dim,
    links: {
      github: 'https://github.com/marekbukoski/Expo-Starter-Kit-Advanced-React-Native-Template',
      website: 'https://github.com/marekbukoski/Expo-Starter-Kit-Advanced-React-Native-Template',
    },
  };
};
