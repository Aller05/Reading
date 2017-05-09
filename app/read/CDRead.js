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
                    leftTitle="123"
                    leftIcon="btn_backitem"
                    leftClick={()=>this._NavLeftClick()}
                    rightTitle="123"
                    rightClick={()=>this._NavLeftClick()}
                    center="reading"
                />
                <TouchableOpacity onPress={()=>this._pushToNewsDetail()}>
                    <Text>阅读</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _pushToNewsDetail() {
        this.props.navigator.push({
            component: CDReadDetail
        })
    }
    _NavLeftClick(){
        alert('左边')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Util.bgColor,
        // justifyContent: 'center',
        alignItems: 'center'
    }
});