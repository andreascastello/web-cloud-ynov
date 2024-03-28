import { getAuth, signInWithPopup, GithubAuthProvider} from "firebase/auth";
import { provider } from './auth_github_provider_create';

const auth = getAuth();
export const signinWithGithub = () => {
    console.log("Signin with Github...")
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(token, user);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GithubAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, email, credential);
        });
}