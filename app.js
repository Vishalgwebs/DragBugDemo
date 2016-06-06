import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class DragBugDemo extends Component {
    constructor() {
        super();
        this.handleDragStart = this.handleDragStart.bind(this);
        this.handleDragMove = this.handleDragMove.bind(this);
        this.handleDragRelease = this.handleDragRelease.bind(this);
        this.state = {
            isDragging: false,
            lastX: -1,
            lastY: -1,
        };
    }

    handleDragStart(event) {
        this.setState({
            isDragging: true,
            lastX: Math.floor(event.nativeEvent.pageX),
            lastY: Math.floor(event.nativeEvent.pageY),
        });
        return true;
    }

    handleDragMove(event) {
        this.setState({
            lastX: Math.floor(event.nativeEvent.pageX),
            lastY: Math.floor(event.nativeEvent.pageY),
        })
    }

    handleDragRelease(event) {
        this.setState({
            isDragging: false,
        })
    }

    render() {
        const {isDragging, lastX, lastY} = this.state;
        return (
            <View
                onStartShouldSetResponder={this.handleDragStart}
                onResponderMove={this.handleDragMove}
                onResponderRelease={this.handleDragRelease}
                style={styles.container}
            >
                {isDragging ?
                    <Text style={styles.message} key='dragging'>
                        Dragging. Last point: {`(${lastX}, ${lastY})`}
                    </Text>
                    :
                    <Text style={styles.message} key='notdragging'>
                        Not dragging.
                    </Text>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    message: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

AppRegistry.registerComponent('DragBugDemo', () => DragBugDemo);
