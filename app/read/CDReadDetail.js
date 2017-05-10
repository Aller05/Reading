/**
 * Created by Administrator on 2017/5/8.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Nav from './../Util/CDCommonNav';

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
                <Nav
                    leftIcon="btn_backitem"
                    leftClick={()=>this.props.navigator.pop()}
                    centerTitle="详情页"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});