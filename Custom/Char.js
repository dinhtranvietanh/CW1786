import React from 'react'
import {View, Text, StyleSheet } from 'react-native'

const CTchar = (props) => {
    return (
        <Text style={styles.text}>
            {props.text}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 50,
        marginBottom: 30,
        color: "#663300",
        fontSize: 65,
        fontWeight: "bold",
    }
})

export default CTchar