import "antd/dist/antd.css";
import "./index.css";
import moment from "moment";
import React from "react";
import {
  Form,
  Select,
  Input,
  InputNumber,
  Radio,
  Button,
  Checkbox,
  Modal,
} from "antd";
import { DatePicker } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Slider, Switch } from 'antd';





//Slider
class Sliders extends React.Component {
  state = {
    disabled: false,
  };

  handleDisabledChange = disabled => {
    this.setState({ disabled });
  };

  render() {
    const { disabled } = this.state;
    return (
      <>
        <Slider defaultValue={30} disabled={disabled} />
        <Slider range defaultValue={[20, 50]} disabled={disabled} />
        Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
      </>
    );
  }
}


//layout
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};


//formItemLayout
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};


//form Item Layou tWith Out Label
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
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

const { RangePicker } = DatePicker;

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


//disabled Date
function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf("day").subtract(1, "days");
}


//Age Validation
const customValidate = (rule, value) => {
  //console.log(value);
  if (value < 18) {
    return Promise.reject(new Error("อายุน้อยเกินไป"));
  } else if (value >= 60) {
    return Promise.reject(new Error("อายุมากเกินไป"));
  } else {
    return Promise.resolve();
  }
};




//Register Form Function !!!!!!!!
const Register_Form = () => {

  const [form] = Form.useForm();



//onFinish Click
const onFinish = async (values) => {

    console.log(values);
    console.log(values.firstname);
    console.log(values.lastname);
    console.log(values.email);
    console.log(values.age);
    console.log(values.gender);
    console.log(values.province);

    //Abroad
    if (values.other !== undefined) {
      console.log(values.other);
    }

    //Show memberperiod
    console.log(`${values.memberperiod[0]._d} to ${values.memberperiod[1]._d}`);

    console.log(values.Sliders);
    console.log(values.website);
    console.log(values.introduction);



    //Loop Skills list
    for (let i in values.skills_list) {
      console.log(values.skills_list[i]);
    }

    console.log(values.agreement);



    //Skills
    let skills = values.skills_list.map((x) => x);
    let skillsInModal = skills.join(", ");
    console.log(skills);



    //Modal importance !!
    Modal.info({
      content: (
        <pre>
          First Name: {values.firstname}
          <br />
          Last Name: {values.lastname}
          <br />
          Email: {values.email}
          <br />
          Age: {values.age}
          <br />
          Gender: {values.gender}
          <br />
          Province: {values.province}
          <br />
          Abroad: {values.other !== undefined ? values.other : "no information"}
          <br />
          Member Period:
          {` ${values.memberperiod[0]._d} to ${values.memberperiod[1]._d}`}
          <br />
          Sliders: {values.Sliders}
          <br />
          Website: {values.website}
          <br />
          Introduction: {values.introduction}
          <br />
          Skills: {skillsInModal}
        </pre>
      ),
  });
};



  return (

    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >


      {/* {firstname} */}
      <Form.Item
        name="firstname"
        label="First Name"
        rules={[
          {
            required: true,
            //How many words can you type? Max: 50 words
            max: 50,
          },
        ]}
      >
        <Input />
      </Form.Item>



      {/* {lastname} */}
      <Form.Item
        name="lastname"
        label="Last Name"
        rules={[
          {
            required: true,
            //How many words can you type? Max: 50 words
            max: 50,
          },
        ]}
      >
        <Input />
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
        <Input />
      </Form.Item>


      {/* {Age} */}
      <Form.Item
        name="age"
        label="Age"
        rules={[
          {
            type: "number",

            //How many words can you type? Max: 0-99 words
            min: 0,
            max: 99,

            //Age Validation
            validator: customValidate,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>



      {/* {Gender} */}
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Radio.Group>
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </Radio.Group>
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
        <Select placeholder="Please select a province">
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
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>


      {/* {memberperiod} */}
      <Form.Item name="memberperiod" label="Member Period">
        <RangePicker disabledDate={disabledDate} />
      </Form.Item>

      
      {/* {Sliders} */}
      <Form.Item name="Sliders" label="Sliders">
        <Sliders />  
      </Form.Item>  


       {/* {Website} */}
      <Form.Item name="website" label="Website">
        <Input />
      </Form.Item>


        {/* {details about you} */}
      <Form.Item name="introduction" label="introduction">
        <Input.TextArea />
      </Form.Item>



      {/* {Skills List} */}
      <Form.List
        name="skills_list"
        rules={[
          {
            validator: async (_, skills_list) => {
              if (!skills_list || skills_list.length < 1) {
                return Promise.reject(new Error("At least 1 skills"));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? "Skills" : ""}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={["onChange", "onBlur"]}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input skill.",
                    },
                  ]}
                  noStyle
                >
                  <Input
                    //placeholder="your skill"
                    style={{ width: "32%" }}
                  />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    style={{ marginLeft: "30px" }}
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}


            {/* {Click Skills} */}
            <Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: "60%" }}
                  icon={<PlusOutlined />}
                >
                  Add skill
                </Button>
              </Form.Item>


              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>


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
  );
};

export default Register_Form;