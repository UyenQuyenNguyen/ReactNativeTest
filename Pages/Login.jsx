import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Login = () => {
    const navigation = useNavigation()

    let account = {
        username: 'quyen',
        password: '123'
    }


    return (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Home', { account })}>
                <Text>Home</Text>
            </TouchableOpacity>
          </View>
    )
}

export default Login