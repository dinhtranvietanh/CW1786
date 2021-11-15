import React, { useState, useEffect } from 'react';
import {View,Text, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CTwriting from '../Custom/writing';
import CTbutton from '../Custom/button';
import CTchar from '../Custom/Char';
import { DbConnect } from '../Database/Db-Connect'
import DatePicker from 'react-native-datepicker';
const db = DbConnect.getConnection()


const UpdateRentailz = ({route, navigation }) => {
    const [homeId, setHomeId] = useState("")
    const [property, setProperty] = useState("")
    const [bedrooms, setBedrooms] = useState("")
    const [datetime, setDatetime] = useState("")
    const [monthlyprice, setMonthlyprice] = useState("")
    const [furniture, setFurniture] = useState("")
    const [notes, setNotes] = useState("")
    const [namereporter, setNamereporter] = useState("")

    useEffect(() => {
        setHomeId(route.params.Id)
        setProperty(route.params.Property)
        setBedrooms(route.params.Bedrooms)
        setDatetime(route.params.Datetime)
        setMonthlyprice(route.params.Monthlyprice)
        setFurniture(route.params.Furniture)
        setNotes(route.params.Notes)
        setNamereporter(route.params.Namereporter)
    }, []);

      const updates = () => {
      if(!property) {
          alert("Please enter all information!")
          return
      }
      if(!bedrooms) {
          alert("Please enter all information!")
          return
      }
      if(!datetime) {
          alert("Please enter all information")
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
        db.transaction((tx) => {
          tx.executeSql(
            "UPDATE table_user SET Property=?, Bedrooms=? , Datetime=?, Monthlyprice=?, Furniture=?, Notes=?, Namereporter=? where Id = ?",
            [property, bedrooms, datetime, monthlyprice, furniture, notes, namereporter, homeId],
            (tx, results) => {
              
            }
          );
        });
        navigation.navigate("Showrentalz")
      };
    }

  return (
    <View style={{flex :1, backgroundColor: 'white'}}>
       <ScrollView>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <CTchar text="Update"/>
            
            <CTwriting
                value={property}
                style={{padding: 20}}
                onChangeText={(property) => setProperty(property)}
            />

            <Picker
                selectedValue={bedrooms}
                style={{ padding: 10, 
                        width: 280,
                        marginTop: 15,
                        borderColor: '#00AD98',
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
                value={monthlyprice}
                style={{padding: 10}}
                onChangeText={(monthlyprice) => setMonthlyprice(monthlyprice)}
            />

            <Picker
                selectedValue={furniture}
                style={{ padding: 10, 
                        width: 285,
                        marginTop: 15,
                        borderColor: '#00AD98',
                    }}
                onValueChange={(itemValue, itemIndex) => setFurniture(itemValue)}>

                <Picker.Item label="Furniture" value="" />
                <Picker.Item label="smart furniture" value=" smart Furnished" />
                <Picker.Item label="Furnished part" value="Furnished part" />
            </Picker>

            <CTwriting
                value={notes}
                style={{ padding: 10}}
                multiline={true}
                numberOfLines={5}
                onChangeText={(notes) => setNotes(notes)}
            />
            <CTwriting
                value={namereporter}
                style={{padding: 10}}
                onChangeText={(namereporter) => setNamereporter(namereporter)}
            />
            <CTbutton title="Update" handlePress={updates}/>
        </View>
        </ScrollView>
    </View>
  );
};

export default UpdateRentailz;