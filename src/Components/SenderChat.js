import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'


const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height


export default  SenderChat =(props) =>{
    return (
        <View style={props.type == 'send' ? styles.containerLeft : styles.containerRight}>
            <Text style={props.type == 'send' ? styles.TimeTextLeft : styles.TimeTextRight}>{props.txt}  </Text>

            <View style={props.type == 'send' ? styles.chatContainerLeft : styles.chatContainerRight}>

                <View style={props.type == 'send' ? styles.imgContainerLeft : styles.imgContainerRight}>
                    <Image source={require('../assets/img9.jpg')}
                        style={styles.imgStyle}
                        resizeMethod={'auto'}
                        resizeMode='cover'
                    />
                </View>
                <Text style={props.type == 'send' ? styles.chatTextLeft : styles.chatTextRight}>{props.type == 'send' ? props.msg : props.msg} </Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    containerLeft: {
        marginLeft: WIDTH / 22,
        marginTop: 17,
    },
    containerRight: {
        marginTop: 17,
        alignItems: 'flex-end',
        marginRight:WIDTH*0.03,
    },
    TimeTextLeft: {
        color: 'white',
        textAlign: 'right',
        marginRight: WIDTH * 1 / 4
    },
    TimeTextRight: {
        color: 'white',
        marginRight: WIDTH * 0.67
    },

    chatContainerLeft: {
        display: 'flex',
        backgroundColor: '#655B85',
        //'#29295A',
        padding: 10,
      //  borderColor: '#0F68D7',
        borderWidth: 1,
        borderRadius: 15,
        width: Dimensions.get('screen').width * 3 / 4,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    chatContainerRight: {
        display: 'flex',
        backgroundColor: '#E19650',
        opacity:0.9,
       // borderColor: '#29295A',
        borderWidth: 1,
        borderRadius: 15,
        width: Dimensions.get('screen').width * 3 / 4,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row-reverse',
        // paddingBottom:HEIGHT*0.03,
        // paddingTop:HEIGHT*0.03,
        // paddingLeft:HEIGHT*0.03
    },
    imgStyle: {
        borderRadius: 500,
        width: WIDTH / 8,
        height: HEIGHT / 16,

    },
    imgContainerLeft: {
        marginTop: -HEIGHT/25,
        marginLeft: -WIDTH/16,
        alignSelf: 'flex-start'
    },
    imgContainerRight: {
        //paddingTop:-HEIGHT*3,
        marginTop: -HEIGHT*0.09 ,
        alignSelf: 'flex-end',
        flexWrap: 'wrap',
        marginRight:-WIDTH*0.03    
    },
    chatTextLeft: {
        color: 'white',
        padding: 5,
        marginTop: -HEIGHT/31,
        marginLeft: WIDTH/7,
        textAlign: 'left',
        fontSize: 18,
        fontFamily: 'Times New Roman'
    },
    chatTextRight: {
        color: 'white',
         paddingBottom:HEIGHT*0.04,
        paddingTop:HEIGHT*0.03,
        paddingLeft:HEIGHT*0.01,
        paddingRight:WIDTH*0.06,
        marginTop: -HEIGHT/20,
        textAlign: 'left',
        fontSize: 18,
        fontFamily: 'Times New Roman',
    
    },

})
