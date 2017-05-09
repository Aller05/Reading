/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'

import CDLaunchPage from './app/main/CDLaunchPage'

export default class Reading extends Component {
    render() {
        return (
            <Navigator
                // 初始路由
                initialRoute={{ name: 'CDLaunchPage', component: CDLaunchPage }}
                // 在路由下面界面的过度方式
                configureScene={(route) => {
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                // 实例化成组件
                renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component {...route.props} navigator={navigator} />
                        }}
            />
        );
    }
}

AppRegistry.registerComponent('Reading', () => Reading);
