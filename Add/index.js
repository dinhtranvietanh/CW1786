import React from 'react'
import {View} from 'react-native'
import CTbutton from '../Custom/button'
import CTchar from '../Custom/char'

const Index = ({navigation}) => {
    
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flex: 1, alignItems: 'center'}}>

                <CTchar
                text="Rentalz"
                />

                <CTbutton 
                title="Create" 
                handlePress={() => navigation.navigate('Create')}
                />

                <CTbutton 
                title="Detail Rentalz" 
                handlePress={() => navigation.navigate('Showrentalz')}
                />

                <CTbutton 
                title="Search" 
                handlePress={() => navigation.navigate('Searchrentailz')}
                />

            </View>
        </View>
    )
}

export default Index