import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';

class Dashboard extends React.Component {
    render() {
        return (
            <ScrollView
                style={{
                    flexGrow: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: '#FFFFFF'
                }}>
                <View >
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Fashion')} style={styles.card}>
                            {/* <Image style={styles.logo} source={require('../images/Contact.jpg')} /> */}
                            <Image style={styles.logo} source={{ uri: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100' }} />
                            <Text style={styles.text}>Fashion</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.card}>
                            <Image style={styles.logo} source={{ uri: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100' }} />
                            <Text style={styles.text}>Mobiles</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyWishList')} style={styles.card}>
                            {/* <Image style={styles.logo} source={require('../images/cart-items.jpg')} /> */}
                            <Image style={styles.logo} source={{ uri: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' }} />
                            <Text style={styles.text}>Electronics</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')} style={styles.card}>
                            <Image style={styles.logo} source={{ uri: 'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100' }} />
                            <Text style={styles.text}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyProfile')} style={styles.card}>
                            <Image style={styles.logo} source={{ uri: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100' }} />
                            <Text style={styles.text}>Appliances</Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyOrders')} style={styles.card}>
                            <Image style={styles.logo} source={require('../images/beauty.jpg')} />
                            <Text style={styles.text}>Beauty</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.card}>
                            <Image style={styles.logo} source={{ uri: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100' }} />
                            <Text style={styles.text}>Grocery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}>
                            <Image style={styles.logo} source={{ uri: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100' }} />
                            <Text style={styles.text}>Toys & Baby</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}>
                            <Image style={styles.logo} source={require('../images/food.jpg')} />
                            <Text style={styles.text}>Food & more</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.card}>
                            <Image style={styles.logo} source={require('../images/furniture.jpg')} />
                            <Text style={styles.text}>Furniture</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}>
                            <Image style={styles.logo} source={require( '../images/sports.jpg')} />
                            <Text style={styles.text}>Sports</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}>
                            <Image style={styles.logo} source={{ uri: 'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100' }} />
                            <Text style={styles.text}>Travel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    col: {
        flex: 2,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#808080'
    },
    logo: {
        width: 80,
        height: 70,
        margin: 15
    },
    card: {
        borderColor: "#D3D3D3",
        borderRadius: 4,
        borderWidth: 1,
        margin: 4
    }
});

export default Dashboard;