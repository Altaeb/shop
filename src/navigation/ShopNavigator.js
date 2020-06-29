import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';

const ProductsNavigator = createSwitchNavigator({
    ProductsOverview: ProductsOverviewScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTineColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});

ProductsOverviewScreen.defaultNavigationOptions = {
    headerTitle: 'All Products'
};

export default  createAppContainer(ProductsNavigator);