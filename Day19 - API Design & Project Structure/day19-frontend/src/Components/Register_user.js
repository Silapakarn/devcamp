import "antd/dist/antd.css";
import "../index.css";
import React, { Component } from 'react';
import axios from 'axios';
import {
  Form,
  Select,
  Input,
  Button,
  Checkbox,
} from "antd";


//layout
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};

//Validate Messages
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const { Option } = Select;

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 4,
    },
    sm: {
      span: 16,
      offset: 4,
    },
  },
};


//onFinish
const onFinish = async (values) => {

    console.log("Success Submit:",values)
    console.log(values);
    console.log(values.first_name);
    console.log(values.last_name);
    console.log(values.Phone_number);
    console.log(values.email);
    console.log(values.address);
    console.log(values.sub_district);
    console.log(values.district);
    console.log(values.province);
    console.log(values.postcode);
    console.log(values.company_name);
    console.log(values.company_address);
    console.log(values.duration);
    console.log(values.position);
    console.log(values.id_employee);
};



//Class Register_User
class Register_user extends Component {

  //props
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      Phone_number: '',
      email: '',
      address: '',
      sub_district: '',
      district: '',
      province: '',
      postcode: '',
      company_name: '',
      company_address: '',
      duration: '',
      position: '',
      id_employee: '',
    };
  }

  //handleInputChange
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //handleSubmit
  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
    alert("Submitted sent successfully.");

    axios
      .post('http://localhost:3000/api/employee', this.state)
      .then((response) => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
  };


  render() {

    //Data 
    const {
      first_name,
      last_name,
      Phone_number,
      email,
      address,
      sub_district,
      district,
      province,
      postcode,
      company_name,
      company_address,
      duration,
      position,
      id_employee
    } = this.state

    return (  
    <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        onSubmit={this.handleSubmit}
        validateMessages={validateMessages}
      >
        <h1 style={{textAlign: 'center', marginBottom: '20px'}}>Employee</h1>

        {/* {firstname} */}
        <Form.Item
          name="first_name"
          label="First Name"
          rules={[
            {
              required: true,
              //How many words can you type? Max: 50 words
              max: 50,
            },
          ]}
        >
          <Input onChange={this.handleInputChange} />
        </Form.Item>



        {/* {lastname} */}
        <Form.Item
          
          name="last_name"
          label="Last Name"
          rules={[
            {
              required: true,
              //How many words can you type? Max: 50 words
              max: 50,
            },
          ]}
        >
          <Input onChange={this.handleInputChange} />
        </Form.Item>

        {/* {Phone Number} */}
        <Form.Item
        
          name="Phone_number"
          label="Phone number"
        >
          <Input  onChange={this.handleInputChange} />
        </Form.Item>

        {/* {Email} */}
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input onChange={this.handleInputChange}/>
        </Form.Item>


        {/* {address} */}
        <Form.Item name="address" label="address">
          <Input.TextArea onChange={this.handleInputChange}/>
        </Form.Item>


        {/* {sub_district} */}
        <Form.Item name="sub_district" label="sub district">
          <Input onChange={this.handleInputChange}/>
        </Form.Item>


        {/* {district} */}
        <Form.Item name="district" label="district">
          <Input onChange={this.handleInputChange}/>
        </Form.Item>


        {/* {province} */}
        <Form.Item
          initialValue="Bangkok"
          name="province"
          label="Province"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select a province",
            },
          ]}
        >
          <Select placeholder="Please select a province" onChange={this.handleInputChange}>
            <Option value="bangkok">Bangkok</Option>
            <Option value="chonburi">Chonburi</Option>
            <Option value="phuket">Phuket</Option>
            <Option value="khonkaen">Khonkaen</Option>
            <Option value="nan">Nan</Option>

            {/* {Abroad} */}
            <Option value="abroad">Abroad</Option>
          </Select>
        </Form.Item>


        {/*Abroad add Other*/}
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.province !== currentValues.province
          }
        >
          {({ getFieldValue }) =>
            getFieldValue("province") === "abroad" ? (
              <Form.Item
                name="other"
                label="Other"
              >
                <Input onChange={this.handleInputChange}/>
              </Form.Item>
            ) : null
          }
        </Form.Item>


        {/* {postcode} */}
        <Form.Item
          name="postcode"
          label="postcode"
        >
          <Input onChange={this.handleInputChange}/>
        </Form.Item>


        <h1 style={{textAlign: 'center', marginBottom: '20px'}}>Work Experience</h1>

          {/* {ID_card_number} */}
        <Form.Item
          name="ID_card_number"
          label="ID card number"
        >
          <Input onChange={this.handleInputChange}/>
        </Form.Item>

        
        <Form.Item 
          name={['company_name']}
          label="Company Name"
        >
          <Input onChange={this.handleInputChange}/>
        </Form.Item>

        <Form.Item 
          name={['company_address']}
          label="Company Address"
        >
          <Input onChange={this.handleInputChange}/>
        </Form.Item>

        <Form.Item 
          name={['duration']}
          label="Work Experience"
        >
          <Input onChange={this.handleInputChange}/>
        </Form.Item>

        <Form.Item 
          name={['position']}
          label="Position"
        >
          <Input onChange={this.handleInputChange}/>
        </Form.Item>

        <Form.Item 
          name={['id_employee']}
          label="ID Employee"
        >
          <Input onChange={this.handleInputChange}/>
        </Form.Item>


        {/* {Accept term} */}
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              //Check Value for Checkbox
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept term")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>Accept term</Checkbox>
        </Form.Item>



        {/* {Button Submit} */}
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
          <Button
            
            type="primary"
            htmlType="submit" //onClick={showModal}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    ) 
  }
}

export default Register_user;