/**
 * Created by Administrator on 2017/5/9.
 */
import React,{Component,PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Platform,
} from 'react-native';

import Util from './Util';

export default class extends Component{
    static propTypes = {
        leftTitle:PropTypes.string,
        leftIcon:PropTypes.string,
        leftClick:PropTypes.func,
        rightTitle:PropTypes.string,
        rightIcon:PropTypes.string,
        rightClick:PropTypes.func,
        centerTitle:PropTypes.string,
        centerIcon:PropTypes.string,
    };
    render(){
        return(
            <View style={styles.container}>
                {/*左侧*/}
                {this._renderLeftView()}
                {/*中间*/}
                {this._renderCenterView()}
                {/*右侧*/}
                {this._renderRightView()}
            </View>
        )
    }
    //左侧视图
    _renderLeftView(){
        var template;
        if(this.props.leftTitle && !this.props.leftIcon){
            template = (
                <Text style={styles.TextStyle}>{this.props.leftTitle}</Text>
            );
        }else if(this.props.leftIcon){
            template = (
                <Image source={{uri:this.props.leftIcon}} style={styles.sideImgStyle}/>
            )
        }else{
            template = (
                <View/>
            )
        }
        return(
            <TouchableOpacity
                style={styles.leftViewStyle}
                onPress={this.props.leftClick}
            >
                {template}
            </TouchableOpacity>
        )
    }
    //中间视图
    _renderCenterView(){
        var template;
        if(this.props.centerTitle && !this.props.centerIcon){
            template = (
                <Text style={styles.TextStyle}>{this.props.centerTitle}</Text>
            );
        }else if(this.props.centerIcon){
            template = (
                <Image source={{uri:this.props.centerIcon}} style={styles.centerImgStyle}/>
            )
        }else{
            template = (
                <View/>
            )
        }
        return(
            <View style={styles.centerViewStyle}>
                {template}
            </View>
        )
    }
    //右侧视图
    _renderRightView(){
        var template;
        if(this.props.rightTitle && !this.props.rightIcon){
            template = (
                <Text style={styles.TextStyle}>{this.props.rightTitle}</Text>
            );
        }else if(this.props.rightIcon){
            template = (
                <Image source={{uri:this.props.rightIcon}} style={styles.sideImgStyle}/>
            )
        }else{
            template = (
                <View/>
            )
        }
        return(
            <TouchableOpacity
                style={styles.rightViewStyle}
                onPress={this.props.rightClick}
            >
                {template}
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        width:Util.screen.width,
        height:Platform.OS == 'ios'? 64 : Util.navHeight,
        backgroundColor:'#fff',
        flexDirection:'row',
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        paddingTop:Platform.OS == 'ios'? 20 : 0,
    },
    centerImgStyle:{
        width:54,
        height:37
    },
    TextStyle:{
        fontSize:16
    },
    leftViewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start',
        paddingLeft:10,
    },
    sideImgStyle:{
        width:24,
        height:24,
    },
    centerViewStyle:{
        flex:3,
        justifyContent:'center',
        alignItems:'center'
    },
    rightViewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:10,
    }
});