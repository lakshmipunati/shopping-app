import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class Product extends React.Component {
    productObj = {
        name: this.props.product.title,
        price: this.props.product.price,
        images: this.props.product.images,
        camera: this.props.product.camera,
        size: this.props.product.size,
        battery: this.props.product.battery,
        display: this.props.product.display,
        weight: this.props.product.weight,
        brand: this.props.product.brand
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', this.productObj)}>
                    <Card >
                        <Image style={styles.img} source={{ uri: this.props.product.images }} />
                        <View style={{ flexDirection: 'row' }}>
                            <Text>{'\u2022'}</Text>
                            <Text style={styles.name} >
                                {this.props.product.title}
                            </Text></View>
                            <View style={{ flexDirection: 'row' }}>
                            <Text>{'\u2022'}</Text>
                        <Text style={styles.price} >
                            $ {this.props.product.price}
                        </Text></View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>{'\u2022'}</Text>
                            <Text style={styles.price} >{this.props.product.size}</Text>
                            </View>
                        <Text h6 style={styles.description}>
                            added 2h ago
                        </Text>
                    </Card>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    },
    description: {
        fontSize: 10,
        color: '#c1c4cd'
    },
    img: {
        width: 250,
        height: 400
    }
});

export default withNavigation(Product);