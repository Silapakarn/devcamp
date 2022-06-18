import React from 'react';
import 'antd/dist/antd.css';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';




const props = {
  name: 'file',
  action: 'http://localhost:3000/upload',
  headers: {
    authorization: 'authorization-text',
  },

  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const MyUpload = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />} style={{marginLeft: '70px'}}>Click to Upload</Button>
  </Upload>
);

export default MyUpload;
