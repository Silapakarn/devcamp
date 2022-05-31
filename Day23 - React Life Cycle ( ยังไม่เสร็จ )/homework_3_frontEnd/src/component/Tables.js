import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Space, Table, Tag } from 'antd';
import axios from 'axios';
import { Button, Modal } from 'antd';
import { useState } from 'react';

const Edit = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Edit
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};


const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'product_name',
    dataIndex: 'product_name',
    key: 'product_name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'stock_left',
    dataIndex: 'stock_left',
    key: 'stock_left',
  },
  {
    title: 'category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Edit',
    dataIndex: 'Edit',
    key: 'Edit',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
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
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];



const data_2 = async () => {
  await axios.get("/api/stock", (req, res) => {})
}



const data = [
  {
    id: '1',
    product_name: 'Silapakan',
    stock_left: 32,
    category: 'Box',
    tags: ['nice', 'developer'],
    Edit : <Edit />
  },
  {
    id: '2',
    product_name: 'Jim Green',
    stock_left: 42,
    category: 'Box',
    tags: ['loser'],
    Edit : <Edit />
  },
  {
    id: '3',
    product_name: 'Joe Black',
    stock_left: 18,
    category: 'Box',
    tags: ['cool', 'teacher'],
    Edit : <Edit />
  },
  {
    id: '4',
    product_name: 'Joe Black',
    stock_left: 19,
    category: 'Box',
    tags: ['cool', 'teacher'],
    Edit : <Edit />
  },
];


const Tables = () => <Table columns={columns} dataSource={data} />;

export default Tables;