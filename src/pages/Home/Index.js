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
    const tabList = [
      {
        key: 'articles',
        tab: '文章',
      },
      {
        key: 'projects',
        tab: '项目',
      },
      {
        key: 'applications',
        tab: '应用',
      },
    ];

    const mainSearch = (
      <div style={{ textAlign: 'center' }}>
        <Input.Search
          placeholder="请输入"
          enterButton="搜索"
          size="large"
          onSearch={this.handleFormSubmit}
          style={{ width: 522 }}
        />
      </div>
    );

    const { match, children, location } = this.props;
    const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
    const menuStyle = {};

    return (
      <div>
        <div>
          <Menu
            style={menuStyle}
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="index">
              <Icon type="index" />
              首页
            </Menu.Item>
            <Menu.Item key="book">
              <Icon type="book" />
              出版图书
            </Menu.Item>
            <Menu.Item key="allBook">
              <Icon type="allBook" />
              国风中文网
            </Menu.Item>
            <Menu.Item key="allBook">
              <Icon type="allBook" />
              采薇书院
            </Menu.Item>
            <Menu.Item key="top">
              <a href="#" target="_blank" rel="noopener noreferrer">
                排行榜
              </a>
            </Menu.Item>
            <Menu.Item key="author" style={{ float: 'right', marginRight: 10 }}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                作者中心
              </a>
            </Menu.Item>
            <Menu.Item key="alipay" style={{ float: 'right', marginRight: 10 }}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                充值
              </a>
            </Menu.Item>
            <Menu.Item key="user" style={{ float: 'right', marginRight: 10 }}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                客户端
              </a>
            </Menu.Item>
          </Menu>
        </div>
        <div style={{ marginTop: 30 }}>
          <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <Card style={{ width: 100, height: 40, padding: 0 }}>
                <span>网易云阅读</span>
              </Card>
            </Col>
            <Col xs={{ span: 11, offset: 1, pull: 2 }} lg={{ span: 6, offset: 2, pull: 3 }}>
              {mainSearch}
            </Col>
            <Col xs={{ span: 5, offset: 1, push: 1 }} lg={{ span: 6, offset: 2, push: 2 }}>
              <Card style={{ width: 100, height: 40, padding: 0 }}>
                <span>我的书架</span>
              </Card>
            </Col>
          </Row>
        </div>
        <Divider style={{ color: 'black' }} />
        <div>
          <Row type="flex" justify="center" align="top">
            <Col span={4}>
              <DemoBox value={100}>col-4</DemoBox>
            </Col>
            <Col span={4}>
              <DemoBox value={50}>col-4</DemoBox>
            </Col>
            <Col span={4}>
              <DemoBox value={120}>col-4</DemoBox>
            </Col>
            <Col span={4}>
              <DemoBox value={80}>col-4</DemoBox>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={6} />
            <Col span={18}>
              <Carousel autoplay>
                <div style={{ height: 300, color: 'black' }}>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
              </Carousel>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Index;
