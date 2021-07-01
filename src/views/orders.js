import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

class MyOrders extends React.Component {
    render() {
        return (
            <View style={styles.container}>
               <Text>Orders Page</Text>
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

export default MyOrders
    