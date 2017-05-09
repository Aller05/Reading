/**
 * Created by Administrator on 2017/5/8.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.props.navigator.pop()}>
                    <Text>详情</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
});