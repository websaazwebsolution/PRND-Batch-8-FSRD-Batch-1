import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

const ProductDetails = ({ route }) => {
    const { product } = route.params;
    console.log(product);

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                {/* Product Image with Shadow and Rounded Corners */}
                <Image
                    source={{ uri: product.image }}
                    style={styles.productImage}
                />
                
                {/* Product Title */}
                <Text style={styles.title}>{product.title}</Text>

                {/* Product Price with Bold Red Color */}
                <Text style={styles.price}>{`$${product.price}`}</Text>

                {/* Product Description with a Little Padding and Line Height */}
                <Text style={styles.description}>{product.description}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#f8f8f8', // Light background for a more neutral look
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    productImage: {
        width: '100%',
        height: 250,
        borderRadius: 15,
        resizeMode: 'cover',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 10,
        textAlign: 'center',
    },
    price: {
        fontSize: 22,
        color: '#ff6347', // Tomato Red color for emphasis
        fontWeight: 'bold',
        marginBottom: 15,
    },
    description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 24,
        paddingHorizontal: 15,
    }
});

export default ProductDetails;
