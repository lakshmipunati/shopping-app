import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import Product from '../components/products';
import { phonesList } from '../data/brands';

const products = phonesList;

class PhoneScreen extends React.Component {
    render() {
        return (
            <ScrollView
                style={{
                    flexGrow: 0,
                    width: "100%",
                    height: "100%",
                }}>
                {
                    products.map((product, index) => {
                        return (
                            <View style={styles.row} key={index}>
                                <View style={styles.col}>
                                    <Product product={product} />
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    col: {
        flex: 1,
    },
});

export default withNavigation(PhoneScreen);