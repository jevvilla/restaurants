import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Home, History } from '../../screens';

import * as routes from './routes';

const Navigator = createStackNavigator({
  [routes.HOME]: {
    screen: Home,
  },
  [routes.HISTORY]: {
    screen: History,
  },
});

export default createAppContainer(Navigator);
