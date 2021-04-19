import React from 'react'
import { View, Text, ScrollView, FlatList, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import ChatInput from './Components/ChatInput'
import SenderChat from './Components/SenderChat'

const { client, xml } = require("@xmpp/client");
const debug = require("@xmpp/debug");


const xmpp = client({
    service: "ws://chat.acumencog.com:5280/xmpp-websocket/",
    domain: "chat.acumencog.com",
    resource: "android",
    username: "shubhangi",
    password: "asdqwe123",
});


export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chat: [
                {
                    id: 1,
                    msg: "Hi! How r u?",
                    time: '5:30',
                    type: 'send'
                },
                {
                    id: 2,
                    msg: "Hi! I'm fine",
                    time: '6:30',
                    type: 'receive'
                },
                {
                    id: 3,
                    msg: "Hi! How r u?",
                    time: '5:30',
                    type: 'send'
                },
                {
                    id: 4,
                    msg: "Hi! I'm fine",
                    time: '6:30',
                    type: 'receive'
                },
                {
                    id: 5,
                    msg: "Hi! How r u?",
                    time: '5:30',
                    type: 'send'
                },
                {
                    id: 20,
                    msg: "Hi! I'm fine",
                    time: '6:30',
                    type: 'receive'
                },
                {
                    id: 6,
                    msg: "Hi! How r u?",
                    time: '5:30',
                    type: 'send'
                },
                {
                    id: 7,
                    msg: "Hi! I'm fine",
                    time: '6:30',
                    type: 'receive'
                },
                {
                    id: 8,
                    msg: "Hi! How r u?",
                    time: '5:30',
                    type: 'send'
                },
                {
                    id: 9,
                    msg: "Hi! I'm fine",
                    time: '6:30',
                    type: 'receive'
                },
                {
                    id: 10,
                    msg: "Hi! How r u?",
                    time: '5:30',
                    type: 'send'
                },
                {
                    id: 11,
                    msg: "Hi! I'm fine",
                    time: '6:30',
                    type: 'receive'
                },
                {
                    id: 12,
                    msg: "Hi! How r u?",
                    time: '5:30',
                    type: 'send'
                },
                {
                    id: 13,
                    msg: "WOHHOOO",
                    time: '6:30',
                    type: 'receive'
                },

            ],
            user: ''
        }
    }

    componentDidMount = () => {
        console.log("STARTING...")
        xmpp.start().catch(console.error);

        xmpp.on("stanza", async (stanza) => {
            console.log('stanza---------------------------------- ', stanza.toString())

            if (stanza.is("message")) {
                //console.log('stanza---------------------------------- ', stanza.toString())
                let msg = stanza.getChildText('body')
                if (msg) {
                    console.log("Received msg is----------------------", msg)
                    let x = {
                        id: Math.random(),
                        msg: msg,
                        time: '1:30',
                        type: 'send'
                    }
                    this.setState({
                        chat: [...this.state.chat, x]
                    })
                }
                // await xmpp.send(xml("presence", { type: "unavailable" }));

                // await xmpp.stop();
            }
        })
    }




    renderList = ({ item }) => {
        return (
            <View style={{ flex: 1, flexDirection: 'column-reverse' }}>

                <SenderChat txt={item.time} type={item.type} msg={item.msg} />
            </View>
        )
    }

    sendData1 = async (msg) => {
        console.log("method called!")
        let x = {
            id: Math.random(),
            msg: msg,
            time: '9:30',
            type: 'receive'
        }
        this.setState({
            chat: [...this.state.chat, x]
        })

        const message = xml(
            "message",
            { type: "chat", to: 'priyanshu123@chat.acumencog.com' },
            xml("body", {}, msg),
        );
        await xmpp.send(message);
        console.log("message sent!", message)





    }

    // sendData = (msg) => {
    //     let x = {
    //         id: Math.random(),
    //         msg: msg,
    //         time: '9:30',
    //         type: 'receive'
    //     }
    //     this.setState({
    //         chat: [...this.state.chat, x]
    //     })
    //     //if(!this.state.user){
    //     //}
    //     //xmpp.start().catch(console.error);

    //     xmpp.on("error", (err) => {
    //         console.error("ERROR!!", err);
    //     });

    //     xmpp.on("offline", () => {
    //         console.log("offline");
    //     });

    //     xmpp.on("stanza", async (stanza) => {
    //         if (stanza.is("message")) {
    //             //  console.log('message---------------------------------- ', stanza.toString())
    //             let msg = stanza.getChildText('body')
    //             if (msg) {
    //                 console.log("Received msg is----------------------", msg)
    //             }
    //             // await xmpp.send(xml("presence", { type: "unavailable" }));

    //             // await xmpp.stop();
    //         }
    //     });


    //     xmpp.on("online", async (address) => {
    //         console.log('Online-----------------------------------------------')
    //         console.log("online as", address.toString());
    //         // Makes itself available
    //         this.setState({
    //             user: address.toString()
    //         })
    //         console.log("user state is ", this.state.user)
    //         if (address.toString()) {
    //             await xmpp.send(xml("presence"));

    //             // Sends a chat message to itself
    //             const message = xml(
    //                 "message",
    //                 { type: "chat", to: 'priyanshu123@chat.acumencog.com' },
    //                 xml("body", {}, msg),
    //             );
    //             await xmpp.send(message);
    //             await xmpp.send(xml("presence", { type: "unavailable" }));

    //             // await xmpp.stop();
    //             console.log('completed---------------------------------------------------------')
    //             return;
    //         }

    //     });



    //     Alert.alert("msg:", msg)

    // }
    renderHeader = () => {
        return (
            <View style={{backgroundColor:'black', }}>
                <Text style={{color:'white', fontSize:25, fontWeight:'bold', padding:10}}>Priyanshu</Text>
            </View>
        )
    }

    render() {
        return (

            <View style={{
                flex: 1,
                backgroundColor: '#171732',
            }}>
 <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'flex-end', }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                {/* <View style={{flex: 1}}> */}
                 <View style={{backgroundColor:'#171732', flex:0.1 }}>
                <Text style={{color:'white', fontSize:25, fontWeight:'bold', padding:5}}>Priyanshu</Text>
            </View>
            <View style={{flex: 0.9}}>
                <FlatList
                   // inverted
                    nestedScrollEnabled={true}
                    data={this.state.chat}
                    renderItem={this.renderList}
                    key={item => item.id}
                    keyExtractor={item => item.id}
                    // numColumns={2}
                    // horizontal={false}
                    style={{ flex: 0.9 }}
                    //initialNumToRender={8}
                    nestedScrollEnabled={true}
                   // ListFooterComponent={this.renderHeader}
                   // invertStickyHeaders={true}
                    
                />
                </View>
{/* </View> */}
                {/* <KeyboardAvoidingView style={{ flex: .1, justifyContent: 'flex-end', }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                > */}
                    <ChatInput sendMsg={(msg) => this.sendData1(msg)} />
                </KeyboardAvoidingView>



            </View>

        )
    }
}

// <GiftedChat
            //     chat={this.state.chat}
            //     onSend={chat => this.onSend(chat)}
            //     user={{
            //         _id: 1,
            //         name: 'Shubhangi',
            //         avatar: 'https://placeimg.com/140/140/any'
            //     }}
            //     showUserAvatar ={true}
            //     showAvatarForEveryMessage ={true}
            //    // renderAvatar ={()=>showAvatar()}
            //     //imageProps={ }
            // />