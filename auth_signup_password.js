import './firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Toast from 'react-native-toast-message';
const auth = getAuth();
export const signup = (email, password) => {
    if (email.length < 6) {
        console.log('Email too short');
        return;
    }
    if (password.length < 6) {
        console.log('Password too short');
        return;
    }
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            console.log('User has been created successfully !');
            Toast.show({
                type: 'success',
                text1: 'Compte créé',
                text2: 'Votre compte a été créé avec succès !'
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            Toast.show({
                type: 'error',
                text1: 'Erreur',
                text2: `${errorMessage}`
            });
        });
}