import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { DbConnect } from '../Database/Db-Connect'


const db = DbConnect.getConnection()

const Searchdetail = ({route}) => {
    const {TypeData} = route.params

    return (
      <View style={styles.container}>
        <View style={styles.listItem}>
          <Text style={styles.textHeader}>Number</Text>
          <Text style={styles.textBottom}>{TypeData.Id}</Text>

          <Text style={styles.textHeader}>Property type</Text>
          <Text style={styles.textBottom}>{TypeData.Property}</Text>

          <Text style={styles.textHeader}>Bedrooms</Text>
          <Text style={styles.textBottom}>{TypeData.Bedrooms}</Text>

          <Text style={styles.textHeader}>Datetime</Text>
          <Text style={styles.textBottom}>{TypeData.Datetime}</Text>

          <Text style={styles.textHeader}>Monthly rent price</Text>
          <Text style={styles.textBottom}>{TypeData.Monthlyprice}</Text>

          <Text style={styles.textHeader}>Furniture</Text>
          <Text style={styles.textBottom}>{TypeData.Furniture}</Text>

          <Text style={styles.textHeader}>Notes</Text>
          <Text style={styles.textBottom}>{TypeData.Notes}</Text>

          <Text style={styles.textHeader}>Name of the reporter</Text>
          <Text style={styles.textBottom}>{TypeData.Namereporter}</Text>
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

export default Searchdetail