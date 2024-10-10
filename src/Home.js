import { Button, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import i18n from './i18n'

const Home = () => {
    const [locale, setLocale] = useState(i18n.locale);

    const changeLanguage = (lang) => {
      i18n.locale = lang; // Change i18n locale
      setLocale(lang); // Update state to trigger re-render
    };
    return (
        <View>
            <Text>{i18n.t('welcome')}</Text>
            <Button title="English" onPress={() => changeLanguage('en')} />
            <Button title="Español" onPress={() => changeLanguage('es')} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})