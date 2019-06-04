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
  PageHeader,
  Comment,
  Avatar,
  List,
} from 'antd';
import moment from 'moment';
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

  handleFormSubmit = value => {
    // eslint-disable-next-line
    console.log(value);
  };

  state = {
    current: 'index',
    comments: [],
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
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
    const routes = [
      {
        path: 'index',
        breadcrumbName: 'First-level Menu',
      },
      {
        path: 'first',
        breadcrumbName: 'Second-level Menu',
      },
      {
        path: 'second',
        breadcrumbName: 'Third-level Menu',
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
    // 评论
    const ExampleComment = ({ children }) => (
      <Comment
        actions={[<span>Reply to</span>]}
        author={<a>Han Solo</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure).
          </p>
        }
      >
        {children}
      </Comment>
    );
    const { TextArea } = Input;

    const CommentList = ({ comments }) => (
      <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
      />
    );

    const Editor = ({ onChange, onSubmit, submitting, value }) => (
      <div>
        <Form.Item>
          <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
            Add Comment
          </Button>
        </Form.Item>
      </div>
    );
    const { comments, submitting, value } = this.state;

    return (
      <div>
        <div>
          <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <img href="#" style={{ width: 120, height: 40 }} src="./logo.png" />
            </Col>
            <Col xs={{ span: 11, offset: 1, pull: 2 }} lg={{ span: 6, offset: 2, pull: 3 }}>
              {mainSearch}
            </Col>
            <Col xs={{ span: 5, offset: 1, push: 1 }} lg={{ span: 6, offset: 2, push: 2 }}>
              <div style={{ width: 120, height: 20, lineHeight: 20, backgroundColor: '#ccc' }}>
                <Card>
                  <span>我的书架</span>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: 30 }}>
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
            <Menu.Item key="allBook" disabled>
              <Icon type="allBook" />
              全部作品
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
        <Divider style={{ color: 'black' }} />
        <div>
          <PageHeader title="Title" breadcrumb={{ routes }} />
        </div>
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
        <Divider style={{ color: 'black' }} />
        <ExampleComment>
          <ExampleComment>
            <ExampleComment />
            <ExampleComment />
          </ExampleComment>
        </ExampleComment>
        <div>
          {comments.length > 0 && <CommentList comments={comments} />}
          <Comment
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <Editor
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                submitting={submitting}
                value={value}
              />
            }
          />
        </div>
      </div>
    );
  }
}

export default Index;
