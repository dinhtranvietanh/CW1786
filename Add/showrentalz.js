import React, {useState, useEffect} from 'react'
import {FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { DbConnect } from '../Database/Db-Connect'

const db = DbConnect.getConnection()

const Showrentalz = ({navigation}) => {
    const [listItem, setListItem] = useState([])

    useEffect(() => {
        db.transaction(function (txn) {
          txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
            [],
            function (tx, res) {
              console.log('item:', res.rows.length);
              if (res.rows.length == 0) {
                txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                txn.executeSql(
                  'CREATE TABLE IF NOT EXISTS table_user(Id INTEGER PRIMARY KEY AUTOINCREMENT, Property TEXT , Bedrooms INTEGER, Datetime INTEGER, Monthlyprice INTEGER, Furniture TEXT, Notes TEXT, Namereporter TEXT)',
                  []
                );
              }
            }
          );
        });
      }, []);

    useEffect(() => {
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM table_user',
            [],
            (tx, results) => {
              var temp = [];
              for (let i = 0; i < results.rows.length; ++i)
                temp.push(results.rows.item(i));
              setListItem(temp);
            }
          );
        });
      }, []);
    
      let listItemView = (item) => {
          return(
        <TouchableOpacity onPress={() => navigation.navigate("DetailRentalz", { item })} >
            <View key={item.Id} style={styles.listItem}>
          <Text style={styles.textHeader}>Property type</Text>
          <Text style={styles.textBottom}>{item.Property}</Text>

          <Text style={styles.textHeader}>Bedrooms</Text>
          <Text style={styles.textBottom}>{item.Bedrooms}</Text>

          <Text style={styles.textHeader}>Datetime</Text>
          <Text style={styles.textBottom}>{item.Datetime}</Text>

          <Text style={styles.textHeader}>Monthly rent price</Text>
          <Text style={styles.textBottom}>{item.Monthlyprice}</Text>

          <Text style={styles.textHeader}>Furniture</Text>
          <Text style={styles.textBottom}>{item.Furniture}</Text>
            </View>
        </TouchableOpacity>
    )
}

    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <FlatList
                    data={listItem}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (listItemView(item))}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    listItem: {
        padding: 25,
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: '#EEE',
    },
    textHeader: {
        color: '#111',
        fontSize: 15,
        fontWeight: 'bold',
    },
    textBottom: {
        color: '#111',
        fontSize: 18,
    }
})

export default Showrentalz