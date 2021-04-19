import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height


export default function ChatInput(props) {

    const [message, setMessage] = useState('')

   const sendData=()=>{
       props.sendMsg(message)
       setMessage('')
    }

    return (
        <View style={styles.InputContainer}>

            <TextInput
                value={message}
                placeholder="Type a message"
                style={styles.chatInput}
                onChangeText={(msg) => setMessage(msg)}
                placeholderTextColor='white'
                multiline={true}

            />
            <View style={styles.iconContainer}>
                <Icon name="send-o" size={25} color="white" style={styles.iconStyle} onPress={sendData} />
                <Icon name="camera" size={25} color="white" style={styles.iconStyle} />
                <Icon name="plus" size={25} color="white" style={styles.iconStyle} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    chatInput: {
        backgroundColor: '#29295A',
        opacity: 0.9,
        marginBottom: 20,
        marginRight: 10,
        borderRadius: 10,
        padding: 10,
        fontSize: 18,
        fontFamily: 'Times New Roman',
        color: 'white',
        width: WIDTH * 0.95,


    },
    InputContainer: {
        //flex:1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
       // backgroundColor: 'pink',

    },
    iconStyle: {
        marginLeft: WIDTH / 28

    },
    iconContainer: {
        marginLeft: -(WIDTH / 2.8),
        flexDirection: 'row',
        //justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: WIDTH / 30
        //alignContent:'space-between'
    }
})
