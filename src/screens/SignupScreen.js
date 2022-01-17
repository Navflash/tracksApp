import React from 'react';
import { View,StyleSheet} from 'react-native'; 
import { Text,Input,Button } from 'react-native-elements';

const SignupScreen = ({ navigation }) =>{
    return (
    <>
    <Text style={{fontSize : 48}}> SignupScreen </Text>
    <Button 
        title= "Go To SignIn"
        onPress={() => navigation.navigate('SignIn')}
    />
    <Button 
        title= "Go To Mainflow"
        onPress={() => navigation.navigate('mainFlow')}
    />
    </>
    );
}

const styles = StyleSheet.create({});

export default SignupScreen;