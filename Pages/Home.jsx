import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View , TouchableOpacity} from "react-native";

const Home = ({ route }) => {
    const { account } = route.params;
    const navigation = useNavigation()
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
               <Text>Logout</Text>
               {account && (
                    <>
                        <Text>{account.username}</Text>
                        <Text>{account.password}</Text>
                    </>
               )}
            </TouchableOpacity>
        </View>
    )
}

export default Home