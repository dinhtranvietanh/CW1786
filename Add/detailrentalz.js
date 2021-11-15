import React from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import CTbutton from '../Custom/button'
import { DbConnect } from '../Database/Db-Connect'

const db = DbConnect.getConnection()

const DetailRentalz = ({route, navigation}) => {
    const {item} = route.params

    const deleteitems = () => {
        try {
          db.transaction((tx) => {
            tx.executeSql(
              "DELETE FROM table_user WHERE Id = ?",
              [item.Id],
              (tx, result) => {
                alert("Success!!!");
              }
            );
          });
        } catch (error) {
         
        }
      };

      const updates = (id, propertyItem, bedroomsItem, datetimeItem, monthlypriceitem, furnitureItem, notesItem, namereporterItem) => {
        navigation.navigate('Update', {
          Id: id,
          Property: propertyItem,
          Bedrooms: bedroomsItem,
          Datetime: datetimeItem,
          Monthlyprice: monthlypriceitem,
          Furniture: furnitureItem,
          Notes: notesItem,
          Namereporter: namereporterItem
        });
      }

    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.listItem}>
          <Text style={styles.textHeader}>Number </Text>
          <Text style={styles.textBottom}>{item.Id}</Text>

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

          <Text style={styles.textHeader}>Notes</Text>
          <Text style={styles.textBottom}>{item.Notes}</Text>

          <Text style={styles.textHeader}>Name of the reporter</Text>
          <Text style={styles.textBottom}>{item.Namereporter}</Text>

          <CTbutton title="Delete" handlePress={deleteitems}/>
          <CTbutton title="Update" handlePress={() => updates(item.Id, item.Property, item.Bedrooms, item.Datetime, item.Monthlyprice, item.Furniture, item.Notes, item.Namereporter)}/>
        </View>
        </ScrollView>
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

export default DetailRentalz