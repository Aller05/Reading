/**
 * Created by Administrator on 2017/5/8.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text
} from 'react-native';
import Util from './../Util/Util';
import Nav from './../Util/CDCommonNav';


export default class extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Nav centerIcon="discover"/>
                <Text>发现</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Util.bgColor,
        alignItems:'center'
    }
});