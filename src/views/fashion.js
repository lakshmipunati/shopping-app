import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { fashionItems } from '../data/fashion';
import Product  from '../components/products';

const FashionScreen = () => {
    // render(){
        return (
            <ScrollView style={{
                flexGrow: 0,
                width: "100%",
                height: "100%",
            }}>
            
                {
                    fashionItems.map((product, index) => {
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
        )
    }
//}

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

export default FashionScreen;