import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Contacts extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Street:  C-1/2, Safdarjung Devp Area</Text>

                <Text>  City:   Delhi</Text>

                <Text>State/province/area:    Delhi</Text>

                <Text>Phone number  01126532688</Text>

                <Text>Zip code  110016</Text>

                <Text>Country calling code  +91</Text>

                <Text>Country  India</Text>
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

export default Contacts;