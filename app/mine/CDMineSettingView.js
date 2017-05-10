/**
 * Created by Administrator on 2017/5/10.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    TouchableOpacity
} from 'react-native';

import Util from './../Util/Util';
import CDMineListView from './CDMineListView';
import CDCommonNav from './../Util/CDCommonNav';
const dataArr = require('./Mine/settingData.json').data;

export default class extends Component {
    render(){
        return(
            <View style={styles.container}>
                <CDCommonNav
                    centerTitle = '设置'
                    leftClick = {()=>this.props.navigator.pop()}
                    leftIcon = 'btn_backitem'
                />
                <CDMineListView
                    dataArr = {dataArr}
                    footerView = {this._footerView()}
                />
            </View>
        )
    }
    _footerView(){
        return(
            <TouchableOpacity style={styles.footerViewStyle}>
                <Text style={styles.footerTextStyle}>立即登录</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Util.bgColor,
    },
    footerViewStyle:{
        width:Util.screen.width,
        height:44,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    },
    footerTextStyle:{
        color:'red',
        fontSize:14,
        fontWeight:'bold',
    }
});