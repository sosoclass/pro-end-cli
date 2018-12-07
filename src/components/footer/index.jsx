import React, {Component} from 'react';
import {TabBar} from 'antd-mobile';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import './index.less';

const Item = TabBar.Item;

class Footer extends Component {
  static propTypes = {
    navList: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
  }

  redirectTo = path => {
    this.props.history.push(path);
  }

  render() {
    // const type = 'laoban';
    // const filter = type === 'laoban' ? '/dashen' : '/laoban';

    const filter = this.props.type === 'laoban' ? '/dashen' : '/laoban';
    const currNavList = this.props.navList.filter(item => filter === item.path ? false : true);
    return (
      <TabBar>
        {
          currNavList.map((item, index) => <Item
            key={index}
            title={item.text}
            icon={<img className="footer-img" src={require(`./images/${item.icon}.png`)} alt={item.text}/>}
            onPress={this.redirectTo.bind(null, item.path)}
            selected={this.props.location.pathname === item.path}
            selectedIcon={<img className="footer-img" src={require(`./images/${item.icon}-selected.png`)}
                               alt={item.text}/>}
          />)
        }
      </TabBar>
    )
  }
}

//withRouter函数能将一般组件包装成路由组件，从而组件内部就能使用路由组件的三个属性history location match
export default withRouter(Footer);