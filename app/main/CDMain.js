/**
 * Created by Administrator on 2017/5/8.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

//引入第三方库
import TabNavigator from 'react-native-tab-navigator';

//引入本地组件
import Read from './../read/CDRead';
import Park from './../park/CDPark';
import Discover from './../discover/CDDiscover';
import Mine from './../mine/CDMine';

export default class extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab:'read'
        };
      }
    render(){
        return(
            <TabNavigator>
                {/*阅读*/}
                {this._renderItem('read',"阅读",'icon_tabbar_homepage','icon_tabbar_homepage_selected',<Read {...this.props}/>)}

                {/*公园*/}
                {this._renderItem('park',"公园",'icon_tabbar_merchant_normal','icon_tabbar_merchant_selected',<Park {...this.props}/>)}

                {/*发现*/}
                {this._renderItem('discover',"发现",'icon_tabbar_nearby_normal','icon_tabbar_nearby_selected',<Discover {...this.props}/>)}

                {/*我的*/}
                {this._renderItem('mine',"我的",'icon_tabbar_mine','icon_tabbar_mine_selected',<Mine {...this.props}/>)}
            </TabNavigator>
        )
    }

    /**
     * 子Item
     * @param {string} selectedTab 选中索引
     * @param {string} title 标题
     * @param {string} renderIcon 图标
     * @param {string} renderSelectedIcon 选中图标
     * @param {object} component 组件
     * @returns {XML}
     * @private
     */
    _renderItem(selectedTab,title,renderIcon,renderSelectedIcon,component){
        return(
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                page
                selectedTitleStyle = {{color:'#36B9AF'}}
                renderIcon={() => <Image source={{uri:renderIcon}} style={styles.imgStyle}/>}
                renderSelectedIcon={() => <Image source={{uri:renderSelectedIcon}} style={styles.imgStyle}/>}
                onPress={() => this.setState({ selectedTab: selectedTab })}>
                {component}
            </TabNavigator.Item>
        )
    }
}

const styles = StyleSheet.create({
    imgStyle:{
        width:26,
        height:26
    }
});
