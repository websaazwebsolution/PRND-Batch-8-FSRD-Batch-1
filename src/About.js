import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const About = ( {navigation}) => {
    return (
        <View>
            <Text> About Screen </Text>
            <Button title="Explor more" onPress={() => navigation.navigate('Profile')} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default About;
