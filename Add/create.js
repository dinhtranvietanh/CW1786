import React, {useState} from 'react'
import { View, Alert, ScrollView } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import CTwriting from '../Custom/Writing';
import CTbutton from '../Custom/button';
import CTchar from '../Custom/Char';
import { DbConnect } from '../Database/Db-Connect';
import DatePicker from 'react-native-datepicker';
import CTwriting from '../Custom/Writing';

const db = DbConnect.getConnection()

const CreateHome = ({navigation}) => {
    const [property, setProperty] = useState("")
    const [bedrooms, setBedrooms] = useState("")
    const [datetime, setDatetime] = useState("")
    const [monthlyprice, setMonthlyprice] = useState("")
    const [furniture, setFurniture] = useState("")
    const [notes, setNotes] = useState("")
    const [namereporter, setNamereporter] = useState("")

    const create = () => {
        if(!property) {
            alert("Please enter all information !")
            return
        }
        if(!bedrooms) {
            alert("Please enter all information !")
        }
        if(!datetime) {
            alert("Please enter all information!")
            return
        }
        if(!monthlyprice) {
            alert("Please enter all information!")
            return
        }
        if(!namereporter) {
            alert("Please enter all information!")
            return
        } else {
            db.transaction(function(tx){
                tx.executeSql(
                    "INSERT INTO table_user (Property, Bedrooms, Datetime, Monthlyprice, Furniture, Notes, Namereporter) VALUES (?,?,?,?,?,?,?)", 
                    [property, bedrooms, datetime, monthlyprice, furniture, notes, namereporter],
                    (tx, results) => {
                        console.log(results.rowsAffected)
                    }
                )
            })
            navigation.navigate("Index")
        }
    }

    return (
    <View style={{flex :1, backgroundColor: 'white'}}>
        <ScrollView>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <CTchar text="Create"/>
            
            <CTwriting
                placeholder="Property type"
                style={{padding: 10}}
                onChangeText={(property) => setProperty(property)}
            />

            <Picker
                selectedValue={bedrooms}
                style={{ padding: 10, 
                        width: 280,
                        marginTop: 15,
                        borderColor: 'black',
                         }}
                onValueChange={(itemValue, itemIndex) => setBedrooms(itemValue)}>

                <Picker.Item label="Bedrooms" value="" />
                <Picker.Item label="bedrooms vip" value="1" />
                <Picker.Item label="bedrooms simple" value="2" />
                <Picker.Item label="bedrooms flex" value="3" />
            </Picker>

            
            
        <DatePicker
          style={{backgroundColor: 'white',
                  width: "70%", padding:5,
                  borderWidth: 1,borderRadius: 10,
                  borderColor: "gray",
                  paddingBottom:5,}}
          date={datetime} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(datetime) => {
            setDatetime(datetime);
          }}
      />
            <CTwriting
                placeholder="Monthly rent price"
                style={{padding: 10}}
                onChangeText={(monthlyprice) => setMonthlyprice(monthlyprice)}
            />

            <Picker
                selectedValue={furniture}
                style={{ padding: 20, 
                        width: 280,
                        marginTop: 30,
                        borderColor: 'black',
                        
                         }}
                onValueChange={(itemValue, itemIndex) => setFurniture(itemValue)}>

                <Picker.Item label="Furniture" value="" />
                <Picker.Item label="smart furniture" value=" smart Furnished" />
                <Picker.Item label="Furnished part" value="Furnished part" />
            </Picker>

            <CTwriting
                placeholder="note"
                style={{ padding: 20}}
                multiline={true}
                numberOfLines={5}
                onChangeText={(notes) => setNotes(notes)}
            />
            <CTwriting
                placeholder="Name of the reporter"
                style={{padding: 20}}
                onChangeText={(namereporter) => setNamereporter(namereporter)}
            />
            <CTbutton title="Create" handlePress={create}/>
        </View>
        </ScrollView>
    </View>
    )
}


export default CreateHome;