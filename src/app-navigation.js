//import { createStackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import PhoneScreen from './views/phones';
import ProductDetailsScreen from './views/product-detail';
import LoginScreen from './views/LoginScreen';
import Contacts from './components/contacts';
import Dashboard from './views/dashboard';
import Settings from './views/settings';
import MyOrders from './views/orders';
import MyProfile from './views/profile';
import MyWishList from './views/wishlist';
import { phonesList } from './data/brands';
import FashionScreen from './views/fashion';

const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: { title: 'Login' }
        },
        Home: {
            screen: PhoneScreen,
            navigationOptions: { title: 'Phones' }
        },
        Details: {
            screen: ProductDetailsScreen,
            navigationOptions: { title: 'Product Details' }
        },
        Dashboard: {
            screen: Dashboard,
            navigationOptions: { title: 'All Categories' }
        },
        Fashion: {
            screen: FashionScreen,
            navigationOptions: { title: 'Fashion' }
        },
        Settings: {
            screen: Settings,
            navigationOptions: { title: 'Settings' }
        },
        MyOrders: {
            screen: MyOrders,
            navigationOptions: { title: 'My Orders' }
        },
        MyProfile: {
            screen: MyProfile,
            navigationOptions: { title: 'My Profile' }
        },
        MyWishList: {
            screen: MyWishList,
            navigationOptions: { title: 'My Wishlist' }
        }
    },
    {
        initialRouteName: "Login"
    }
);

export default AppNavigator;