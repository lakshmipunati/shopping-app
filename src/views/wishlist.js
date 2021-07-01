import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

class MyWishList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
               <Text>MyWishList Page</Text>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 23
    },
})

export default MyWishList;