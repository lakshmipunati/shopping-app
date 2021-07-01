import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';


class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../images/shopping-cart.jpg')} />
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder=" Email"
                    placeholderTextColor="#808080"
                    autoCapitalize="none"
                />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder=" Password"
                    placeholderTextColor="#808080"
                    autoCapitalize="none"
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.props.navigation.navigate('Dashboard')} >
                    <Text style={styles.submitButtonText}> Login </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#808080',
        borderWidth: 1,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    submitButton: {
        alignItems: 'center',
        backgroundColor: '#0080ff',
        padding: 10,
        margin: 15,
        height: 40,
        width: 80,
        borderRadius: 2
    },
    submitButtonText: {
        color: 'white'
    },
    logo: {
        width: 100,
        height: 100,
        margin: 10
      },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#7a42f4'
    }
})