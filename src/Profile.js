import React from 'react';
import { StyleSheet, View, Text,Button } from 'react-native';

const Profile = ({navigation}) => {
    return (
        <View>
            <Text>Profile</Text>
            <Button title="My courses" onPress={() => navigation.navigate('courses')} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Profile;

