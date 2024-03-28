import './firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Toast from 'react-native-toast-message';
const auth = getAuth();
export const signin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            console.log('User has been signed in successfully !');
            Toast.show({
                type: 'success',
                text1: 'Connecté',
                text2: 'Vous êtes bien connecté !'
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