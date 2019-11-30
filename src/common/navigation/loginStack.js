import { createStackNavigator } from 'react-navigation-stack';

import { Login } from '../../screens';
import * as routes from './routes';

export default createStackNavigator(
  {
    [routes.LOGIN]: { screen: Login },
  },
  {
    headerMode: 'none',
  },
);
