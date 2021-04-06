/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import XMPP from 'react-native-xmpp-z';
const DOMAIN = "52.29.39.15";
const SCHEMA = "ios";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const { client, xml } = require("@xmpp/client");
const debug = require("@xmpp/debug");

sendMessage = () => {
  const xmpp = client({
    service: "ws://52.29.39.15:5280/xmpp-websocket/",
    domain: "52.29.39.15",
    resource: "android",
    username: "satender",
    password: "asdqwe123",
  });

  //debug(xmpp, true);
  //xmpp.online("admin@52.29.39.15")

  xmpp.on("error", (err) => {
    console.error(err);
  });

  xmpp.on("offline", () => {
    console.log("offline");
  });

  xmpp.on("stanza", async (stanza) => {

    console.log('stanza ', stanza.root().toString())
    


  });

  xmpp.on("online", async (address) => {
    console.log('Online')
    const message = "Hello";
    const recipients = ["satender@52.29.39.15"];
    const stanzas = recipients.map((address) =>
      xml("message", { to: address, type: "chat" }, xml("body", null, message)),
    );
    //console.log(stanzas)
    //xmpp.send(...stanzas).catch(console.error);
    console.log('completed')
    return
  });

  xmpp.start().catch(console.error);

};
const Section = ({ children, title }): Node => {


  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  //this.local = 'daksh'
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Button onPress={() => sendMessage()} title='Login and Message'></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
