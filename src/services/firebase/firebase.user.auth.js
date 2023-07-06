import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { auth } from './firebaseConfig';



window.recaptchaVerifier = new RecaptchaVerifier(
  'sign-in-button',
  {
    size: 'invisible',
    callback: (response) => {
      console.log(response);
      // reCAPTCHA solved, allow signInWithPhoneNumber.
    },
  },
  auth
);

const appVerifier = window.recaptchaVerifier;

const userSingInWithPhoneNumber = async (phoneNumber) => {
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    })
    .catch((error) => {
      console.log(error);
      // Error; SMS not sent
      // ...
    });
};

export default userSingInWithPhoneNumber;
