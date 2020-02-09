import React, { Component } from 'react'
import { StyleSheet, Platform, View, NetInfo, Text } from 'react-native'
import Constants from 'expo-constants'

export default class Status extends Component {
    state = {
        isConnected: null
    }

    render() {
        const { isConnected } = this.state

        const backgroundColor = isConnected ? 'white' : 'red'
        if (Platform.OS === 'ios') {
            return (
                <View style={[styles.status, {backgroundColor}]}></View>
            )
        }

        return null
    }
}
const statusHeight = (Platform.OS === 'ios' ? Constants.statusBarHeight: 0)

const styles = StyleSheet.create({
    status: {
        zIndex: 1,
        height: statusHeight
    }
})
