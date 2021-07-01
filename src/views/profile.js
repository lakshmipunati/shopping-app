import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

class MyProfile extends React.Component {
    render() {
        return (
            <View style={styles.container}>
               <Text>MyProfile Page</Text>
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

export default MyProfile;