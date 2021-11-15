import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import CTbutton from '../Custom/button'
import CTchar from '../Custom/Char'
import CTwriting from '../Custom/Writing'
import { DbConnect } from '../Database/Db-Connect'



const db = DbConnect.getConnection()

const Searchrentailz = ({navigation}) => {
    const [searchType, setSearchTpye] = useState("")
    const [TypeData, setTypeData] = useState([])

    const searchtype = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM table_user where Property = ?",
                [searchType],
                (tx, results) => {
                    var len = results.rows.length
                    console.log('len', len)
                    if(len > 0) {
                        setTypeData(results.rows.item(0))
                    }
                }
            )
        })
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
            <View style={{ flex: 1, alignItems: 'center'}}>

                <CTchar 
                text="Search Rentailz"
                />

                <CTwriting
                placeholder="Enter your property type !"
                style={{padding: 10}}
                onChangeText={(searchType) => setSearchTpye(searchType)}
                />

                <CTbutton title="OK" handlePress={searchtype}/>
            
            <TouchableOpacity onPress={() => navigation.navigate("SearchDetail",{ TypeData })}>
            <View style={styles.listItem}>
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

                <Text style={styles.textHeader}>Name of the reporter</Text>
                <Text style={styles.textBottom}>{TypeData.Namereporter}</Text>
            </View>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    listItem: {
        padding: 25,
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: '#EEE',
    },
    textHeader: {
        color: '#111',
        fontSize: 18,
        fontWeight: 'bold',
    },
    textBottom: {
        color: '#111',
        fontSize: 16,
    }
})

export default Searchrentailz;