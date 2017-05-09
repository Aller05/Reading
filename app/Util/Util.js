/**
 * Created by Administrator on 2017/5/9.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    Dimensions,
    PixelRatio
} from 'react-native';

module.exports = {
    //1.获取屏幕相关属性
    screen:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        scale:Dimensions.get('window').scale,
    },

    //2.最小线宽
    MinPixelRatio:1/PixelRatio.get(),

    //3.网络请求
    get:(api_url,successBack,errorBack)=>{
        fetch(api_url)
            .then((response)=>{response.json()})
            .then((responseJson)=>{
                successBack(responseJson)
            })
            .catch((error)=>{
                errorBack(error)
            })
    },

    //4.导航栏高度
    navHeight:44,

    //5.背景颜色
    bgColor:'#e8e8e8'

};

