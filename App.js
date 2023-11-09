import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Users } from "./src/Users";

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.content}>
      <Text style={styles.txtheader}>LIST OF GUESTS</Text>
      <ScrollView>
        {Users.map((user) => {
          return (
            <View>
              <Text style={styles.txtlabel}>
              {user.name.lname},{user.name.fname}{user.name.mname ? `, ${user.name.mname}.` : ''}
              </Text>
              <Text style={styles.txtaddress}>{user.address}</Text>
            </View>
          );
        })}
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  content:{
    flexDirection: "column",
    justifyContent: "flex-end",
    marginLeft: 30,
    paddingBottom: 30,
  },

  txtheader: {
    marginBottom: 30,
    fontSize: 22,
    fontWeight: "bold",
  },

  txtlabel: {
    fontSize: 22,
    fontWeight: "bold",
  },

  txtaddress:{
    marginBottom: 18,
  }
});
