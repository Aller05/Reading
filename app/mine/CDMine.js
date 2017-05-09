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

export default class extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>我的</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Util.bgColor,
        justifyContent:'center',
        alignItems:'center'
    }
});