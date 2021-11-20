import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

interface STDDATA {
  id: number;
  name: string;
  email: string;
  age: number;
}

const STUDENT_DATA: any[] = [
  { id: 1, name: 'Gurlivleen', email: 'gurlivleen@example.com', age: 21 },
  { id: 2, name: 'Prabhjot', email: 'prabhjot@example.com', age: 20 },
  { id: 3, name: 'Anmol', email: 'anmol@example.com', age: 17 },
];

const ListItem = ({ data }: { data: STDDATA }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.heading1}>{ data.name }</Text>
      <Text style={styles.subHeading}>{ data.email }</Text>
      <Text style={styles.subHeading}>{ data.age }</Text>
    </View>
  );
}

const ListView = () => {
  const render = ({ item }: { item: STDDATA }) => <ListItem data={item} />

  return (
    <View>
      <FlatList data={STUDENT_DATA} renderItem={render} />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    // width: '12rem',
    // height: '5rem',
    flex: 1,
    backgroundColor: '#fff',
    borderColor: "#a0a0a0",
    borderWidth: 4,
    borderRadius: 12,
    margin: 10,
    padding: 10
  },
  heading1: {
    fontSize: 44,
  },
  subHeading: {
    fontSize: 24,
    color: '#a0a0a0',
    marginTop: 2
  }
})

export default ListView
