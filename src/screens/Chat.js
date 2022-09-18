// Import the screens
import Main from '../components/utils/Main';
import Chat from '../components/utils/Chat';
// Import React Navigation
import { createStackNavigator } from 'react-navigation'

// Create the navigator
const navigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});

// Export it as the root component
export default navigator