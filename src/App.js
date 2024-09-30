import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "./Views/UserList";
import UserForm from "./Views/UserForm";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@rneui/themed";
import { UsersProvider } from "./context/UsersContext";

const Stack = createNativeStackNavigator();

export default props => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="UserList"
          screenOptions={screenOptions}>
          <Stack.Screen name='UserList' component={UserList} options={({ navigation }) => {
            return {
              title: "Lista de Usuários",
              headerRight: () => (
                <Button
                  icon={<Ionicons name="add" size={26} color={'#fff'} />}
                  type="clear" onPress={() => navigation.navigate('UserForm')}
                />
              )
            }
          }} />
          <Stack.Screen name='UserForm' component={UserForm} options={{ title: 'Formulário de Usuário' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  )
}

const screenOptions = {
  headerStyle: { backgroundColor: '#8400ff' },
  headerTintColor: '#ffff',
  headerTitleStyle: { fontWeight: "bold" }
}
