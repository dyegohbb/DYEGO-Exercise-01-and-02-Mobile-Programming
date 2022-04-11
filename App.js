import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Input, Button, Alert } from 'react-native-elements';

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: "collumn", backgroundColor: "#dce9e7", alignItems: "center", justifyContent: 'center', paddingBottom: 100 }}>
      <View style={{ alignItems: "center", paddingTop: 50 }}>
        <Icon
          raised
          size={60}
          name='alien-outline'
          type='material-community'
          color='grey' />
      </View>
      <View style={{ height: 150, width: 300, paddingTop: 10 }}>
        <Input placeholder="E-mail" />
        <Input style={{ marginTop: 10 }} placeholder="Senha" />
        <View style={{ flexDirection: 'row' }}>
          <Button
            title="Entrar"
            buttonStyle={{
              borderColor: '#f4f4f4',
              backgroundColor: '#f4f4f4',
              borderRadius: 3,
            }}
            containerStyle={{
              width: 100,
              marginHorizontal: 10,
              marginVertical: 10,
              marginLeft: 40,
            }}
            titleStyle={{ color: "grey" }}
          />
          <Button
            title="Cadastrar"
            buttonStyle={{
              backgroundColor: '#f4f4f4',
              borderRadius: 3,
            }}
            containerStyle={{
              width: 100,
              marginHorizontal: 10,
              marginVertical: 10,
            }}
            titleStyle={{ color: "grey" }}
          />
        </View>
      </View>
      <View style={{ backgroundColor: "aqua", alignItems: "center" }}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  label: {
    marginRight: 10,
  }
});