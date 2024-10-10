import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
  en: {  "loginTitle": "Login",
         "policyText": "By signing in you are agreeing to our ",
         "termsPolicy": "Terms and privacy policy",
         "rememberPassword": "Remember password",
         "forgotPassword": "Forget password",
        "orConnectWith": "or connect with",
         "login": "Login",
        "register": "Register",
         "touchLogin": "Login with touch"},

  fr: {  "loginTitle": "Connexion",
         "policyText": "En vous connectant, vous acceptez nos ",
         "termsPolicy": "Conditions générales et politique de confidentialité",
         "rememberPassword": "Se souvenir du mot de passe",
         "forgotPassword": "Mot de passe oublié",
         "orConnectWith": "ou connectez-vous avec",
         "login": "Connexion",
         "register": "S'inscrire",
         "touchLogin": "Connexion tactile" },
};

i18n.locale = Localization.locale;

i18n.fallbacks = true;

export default i18n;