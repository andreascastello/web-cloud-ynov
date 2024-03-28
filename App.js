import React, { useEffect, useState, useRef } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { signup } from './auth_signup_password';
import { signin } from './auth_signin_password';
import Toast from 'react-native-toast-message';
import { signinWithGithub } from './auth_github_signin_popup';
export default function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignup = (email, password) => {
        signup(email, password, Toast); // Assurez-vous que vos fonctions signup et signin utilisent Toast correctement
    };

    const handleSignin = (email, password) => {
        signin(email, password, Toast);
    };


    return (
        <View style={styles.container}>
            <Text>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
            />
            <Text>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            <Button title="Sign Up !" onPress={() => handleSignup(email, password)}/>
            <Button title="Sign In !" onPress={() => handleSignin(email, password)}/>
            <Button title="Sign In with Github !" onPress={() => signinWithGithub()}/>
            <Toast/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
