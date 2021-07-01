import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class ProductDetailsScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        const images = navigation.getParam('images');
        const price = navigation.getParam('price');
        const name = navigation.getParam('name');
        const camera = navigation.getParam('camera');
        const display = navigation.getParam('display');
        const size = navigation.getParam('size');
        const weight = navigation.getParam('weight');
        const battery = navigation.getParam('battery');
        const brand = navigation.getParam('brand');
        return (
            <ScrollView
            style={{
                flexGrow: 0,
                width: "100%",
                height: "100%",
            }}>
            <View>
                <Card>
                    <Text h3>
                       {name}
                    </Text>
                    <Image style={styles.img} source={{uri: images}} />
                    <View style={{ flexDirection: 'row' }}>
                            <Text>{'\u2022'}</Text>
                    <Text style={styles.name}>
                      {name} -  {brand}
                    </Text></View>
                    <View style={{ flexDirection: 'row' }}>
                            <Text>{'\u2022'}</Text>
                    <Text style={styles.price}>
                        $ {price}
                    </Text></View>
                    <View style={{ flexDirection: 'row' }}>
                            <Text>{'\u2022'}</Text>
                    <Text style={styles.price}>
                        {camera} - {display}
                    </Text></View>
                    <View style={{ flexDirection: 'row' }}>
                            <Text>{'\u2022'}</Text>
                    <Text style={styles.price}>
                        {size} - {weight}
                    </Text></View>
                    <View style={{ flexDirection: 'row' }}>
                            <Text>{'\u2022'}</Text>
                    <Text style={styles.price}>
                        {battery}
                    </Text></View>
                    <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.props.navigation.navigate('Home')} >
                    <Text style={styles.submitButtonText}> Add to Cart </Text>
                </TouchableOpacity>
                </Card>
            </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    submitButton: {
        alignItems: 'center',
        backgroundColor: '#0080ff',
        padding: 10,
        margin: 10,
        height: 40,
        width: 100,
        borderRadius:4
    },
    submitButtonText: {
        color: 'white'
    },
    img: {
        width: 250,
        height: 400
    },
    name: {
        color: '#5a647d',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
     flex: 1, paddingLeft: 5
    },
    price: {
        // fontWeight: 'bold',
        fontSize:12,
        marginBottom: 10,
        paddingLeft: 5
    }
})
export default ProductDetailsScreen;