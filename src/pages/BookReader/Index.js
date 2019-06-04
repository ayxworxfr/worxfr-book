import React, { Component } from 'react';
import router from 'umi/router';
import { connect } from 'dva';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  Icon,
  Button,
  Dropdown,
  Menu,
  InputNumber,
  DatePicker,
  Modal,
  message,
  Badge,
  Divider,
  Steps,
  Radio,
  Carousel,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './Index.less';

@connect()
class Index extends Component {
  handleTabChange = key => {
    const { match } = this.props;
    switch (key) {
      case 'articles':
        router.push(`${match.url}/articles`);
        break;
      case 'applications':
        router.push(`${match.url}/applications`);
        break;
      case 'projects':
        router.push(`${match.url}/projects`);
        break;
      default:
        break;
    }
  };

  state = {
    current: 'index',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  handleFormSubmit = value => {
    // eslint-disable-next-line
    console.log(value);
  };

  render() {
    const header = {
      width: '100%',
      height: '30px',
      position: 'fixed',
      top: 0,
    };
    const titleStyle = {
      textAlign: 'center',
      fontSize: 6,
      fontWeight: 24,
      color: '#993333',
      backgroundColor: '#faf3eb',
    };
    const outerStyle = {
      // backgroundColor: 'rgba(233, 152, 48, 0.85)',
      backgroundColor: '#f2e3ce',
    };
    const bookStyle = {
      // backgroundColor: 'rgba(233, 152, 48, 0.85)',
      marginTop: 16,
      marginLeft: 80,
      width: 1000,
      height: 1500,
      color: '#333333',
      backgroundColor: '#faf3eb',
    };
    const titleMenu = (
      <Menu
        style={{ header }}
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="title" style={{ marginLeft: 120 }}>
          title
        </Menu.Item>

        <Menu.Item key="mode" style={{ marginLeft: 320 }}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            word模式
          </a>
        </Menu.Item>
        <Menu.Item key="textTable">
          <Icon type="unordered-list" />
        </Menu.Item>
        <Menu.Item key="readMode">
          <Icon type="question" />
        </Menu.Item>
        <Menu.Item key="jump">
          <Icon type="logout" />
        </Menu.Item>
        <Menu.Item key="fontSize">
          <Icon type="font-size" />
        </Menu.Item>
        <Menu.Item key="question">
          <Icon type="question" />
        </Menu.Item>
        <Menu.Item key="label">
          <Icon type="tablet" />
        </Menu.Item>
        <Menu.Item key="index">
          <Icon type="home" />
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Card title={titleMenu} bodyStyle={outerStyle}>
          <p
            style={{
              fontSize: 14,
              textAlign: 'center',
              // color: 'rgba(255, 129, 0, 0.85)',
              color: '#993333',
              marginBottom: 16,
              fontWeight: 500,
            }}
          >
            Group title
          </p>
          <Card
            type="inner"
            title="Inner Card title"
            headStyle={titleStyle}
            style={bookStyle}
            // extra={<a href="#">More</a>}
          >
            Inner Card content
          </Card>
          <Card
            headStyle={titleStyle}
            style={bookStyle}
            type="inner"
            title="Inner Card title"
            // extra={<a href="#">More</a>}
          >
            Inner Card content
          </Card>
        </Card>
      </div>
    );
  }
}

export default Index;
