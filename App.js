import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Status from './components/Status'

export default class App extends Component {

    renderMessageList() {
        return (
            <View style={styles.content}></View>
        )
    }

    renderInputMethodEditor() {
        return (
            <View style={styles.inputMethodEditor}></View>
        )
    }

    renderToolbar() {
        return (
            <View style={styles.toolbar}></View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Status />
                {this.renderMessageList()}
                {this.renderInputMethodEditor()}
                {this.renderToolbar()}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        flex: 1,
        backgroundColor: 'white'
    },
    inputMethodEditor: {
        flex: 1,
        backgroundColor: 'white'
    },
    toolbar: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.04)',
        backgroundColor: 'white'
    }
});
