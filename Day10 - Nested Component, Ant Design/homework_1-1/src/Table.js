import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Button, notification } from 'antd';
import { Table, Tag, Space } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',


      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

const columns = [
  {
    title: 'Avatar',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Button',
    dataIndex: 'botton',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite </a>
        <a>Delete</a>
      </Space>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite </a>
        <a>Delete</a>
      </Space>
    ),
  },
];



const data = [
  {
    key: '1',
    name: <Avatar size={64} icon={<UserOutlined />} />,
    botton: <Button type="primary" onClick={openNotification}>
    Open the notification box
    </Button>,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: <Avatar size={64} icon={<UserOutlined />} />,
    botton: <Button type="primary" onClick={openNotification}>
    Open the notification box
    </Button>,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: <Avatar size={64} icon={<UserOutlined />} />,
    botton: <Button type="primary" onClick={openNotification}>
    Open the notification box
    </Button>,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];



const Tables = () => {
    return (<>
        <Table columns={columns} dataSource={data} />
    </>);
}

export default Tables;