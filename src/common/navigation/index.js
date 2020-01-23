import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginStack from './loginStack';
import AppStack from './appStack';
import * as routes from './routes';

const switchNavigator = createSwitchNavigator(
  {
    [routes.SWITCH_LOGIN]: LoginStack,
    [routes.SWITCH_APP]: AppStack,
  },
  {
    initialRouteName: routes.SWITCH_LOGIN,
  },
);

export default createAppContainer(switchNavigator);
