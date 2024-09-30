import React, { useContext } from "react";
import { View, FlatList, Alert } from "react-native";
import Users from "../../data/Users.js";
import { ListItem, Avatar, Icon } from "@rneui/base";
import UsersContext from "../context/UsersContext.js";

export default props => {
    const { state, dispatch } = useContext(UsersContext);

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,

                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function GetActions({ user }) {
        return (
            <>
                <Icon
                    name="edit"
                    size={26}
                    type="clear"
                    color={'#8400ff'}
                    onPress={() => props.navigation.navigate('UserForm', user)}
                />
                <Icon
                    name="delete"
                    size={26}
                    type="clear"
                    color={'red'}
                    onPress={() => confirmUserDeletion(user)}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}
            >
                <Avatar source={{ uri: user.avatarUrl }} rounded />
                <ListItem.Content>
                    {/* Nome do usuário */}
                    <ListItem.Title>{user.name}</ListItem.Title>
                    {/* Email do usuário */}
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
                <GetActions user={user} />

            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.Users}
                renderItem={getUserItem}
            />
        </View>
    )
}
