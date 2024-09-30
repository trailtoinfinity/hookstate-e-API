import { Icon } from "@rneui/base";
import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import UsersContext from "../context/UsersContext";

export default ({ route, navigation }) => {
    const { dispatch } = useContext(UsersContext)
    const [user, setUser] = useState(Object.keys(route.params ? route.params : {}))
    return (
        <>
            <View style={Style.form}>
                <Text style={Style.text}>Nome</Text>
                <TextInput
                    onChangeText={name => setUser({ ...user }, name)}
                    placeholder="Informe o nome..."
                    value={user.name}
                    style={Style.input}
                />
                <Text style={Style.text}>Email</Text>
                <TextInput
                    onChangeText={email => setUser({ ...user }, email)}
                    placeholder="Informe o email..."
                    value={user.email}
                    style={Style.input}

                />
                <Text style={Style.text}>URL do Avatar</Text>
                <TextInput
                    onChangeText={avatarUrl => setUser({ ...user }, avatarUrl)}
                    placeholder="Informe URL do avatar..."
                    value={user.email}
                    style={Style.input}

                />
            </View>

            {/* Centralizando o botão na tela: usei 'alignItems' para alinhar o botão horizontalmente */}
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={Style.button} onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }
                }
                >
                    {/* Centralizando e alinhando o conteúdo dentro do botão */}
                    <View style={Style.buttonInside}>
                        {/* Texto do botão com margem para separar do ícone */}
                        <Text style={Style.buttonText}>Salvar</Text>
                        {/* Ícone ao lado do texto, alinhado verticalmente */}
                        <Icon name="save" color='white' style={Style.icon} />
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

const Style = StyleSheet.create({
    buttonInside: {
        flexDirection: "row",  // Mantém o texto e o ícone em linha
        alignItems: 'center',  // Alinha verticalmente o texto e o ícone
        justifyContent: 'center',  // Centraliza o conteúdo horizontalmente dentro do botão
    },

    button: {
        backgroundColor: '#00ff37',
        borderRadius: 20,
        height: 40,
        width: 200,
        justifyContent: 'center',  // Centraliza o conteúdo do botão em si
    },

    buttonText: {
        textAlign: 'center',
        color: 'white',
        marginRight: 8,  // Adiciona espaço entre o texto e o ícone
    },

    form: {
        padding: 12
    },

    text: {
        marginBottom: 8,
        fontSize: 16,
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 8,
    },

    icon: {
        // O ícone já está alinhado corretamente devido ao uso de 'alignItems' no botão
    }
})
