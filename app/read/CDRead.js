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
import Util from './../Util/Util';
import Nav from './../Util/CDCommonNav';

import CDReadDetail from './CDReadDetail';

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
                    centerIcon="reading"
                />
                <TouchableOpacity onPress={()=>this._pushToNewsDetail()}>
                    <Text>阅读</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _pushToNewsDetail() {
        console.log(CDReadDetail);
        this.props.navigator.push({
            component: CDReadDetail
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Util.bgColor,
        alignItems: 'center'
    }
});