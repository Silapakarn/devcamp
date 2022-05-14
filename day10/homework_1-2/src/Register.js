import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, InputNumber, Button, Modal } from 'antd';
import { Radio } from 'antd';
import { Select } from 'antd';
import { DatePicker, Space} from 'antd';
import { Checkbox } from 'antd';
import { Rate } from 'antd';
import { Slider, Switch } from 'antd';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Mentions } from 'antd';
import moment from 'moment';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;
const { RangePicker } = DatePicker;


/*   Modal_Submit     */

class Modal_Submit extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  hideModal = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal} >
          Submit
        </Button>

        <Modal
          title="Modal"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </>
    );
  }
}



/*   Field Skills   */

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
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};


/*    Mentions    */

const MOCK_DATA = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
};

class Mentions_Form extends React.Component {
  state = {
    prefix: '@',
  };

  onSearch = (_, prefix) => {
    this.setState({ prefix });
  };

  render() {
    const { prefix } = this.state;

    return (
      <Mentions
        style={{ width: '100%' }}
        placeholder="input @ to mention people, # to mention tag"
        prefix={['@', '#']}
        onSearch={this.onSearch}
      >
        {(MOCK_DATA[prefix] || []).map(value => (
          <Option key={value} value={value}>
            {value}
          </Option>
        ))}
      </Mentions>
    );
  }
}


/*    UploadOutlined    */

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
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


/*     Slider     */

class Slider_Form extends React.Component {
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


/*    Checkbox    */

function onChange_Checkbox(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  
  const plainOptions = ['Apple', 'Pear', 'Orange'];

/*   layout   */

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};



  const validateMessages = {
      required: '${label} is required!',

      types: {
        text: '${label} must be between ${min} and ${max}',
      },
        number: {
          range: '${label} You are younger ${min} or You are older ${max}',
      },
    };














      /*  Function Input_Form  */
      const Input_Form = () => {




        const onFinish = (values) => {
          console.log(values.firstname);
          console.log(values.age);
          console.log(values.gender);
          console.log(values.customizeGender);
          console.log(values.radio);
          console.log(values.memberperiod);
        };




        /*  Validate  */

        const customNameValidation = (rule, value) => {
          return value.length < 50 ? Promise.resolve() : Promise.reject(new Error('Error: Maximum number of words you type is 50 words.'));
        }

      

        const customAgeRangValidation = (rule, value) => {
          if (value < 18){
            return Promise.reject(new Error('คุณอายุน้อยเกินไป')) ;
          }
          else if (value > 60 && value <= 99){
            return Promise.reject(new Error('คุณแก่เกินไป')) ;
          } 
          else if (value > 99) {
            return Promise.reject(new Error('Error: Maximum number of words you type is 99 words.'));
          } else {
            return Promise.resolve()
          }
        };



        //let myDate = Moment().format('MMMM Do YYYY, h:mm:ss a');
        function disabledDate(current) {
          // Can not select days before today and today
          return current && current < moment().endOf("day").subtract(1, "days");
        }


        

        return (<>
          <Form {...layout} name="nest-messages" onFinish={onFinish} /*onSubmit={handleSubmit}*/ validateMessages={validateMessages} className="input-form">
      

           <div className="input-name">
           <Form.Item

              name='firstname'
              label="First Name"
              rules ={[
                {
                  required: true,
                },{
                  validator: customNameValidation
                }
              ]}
            >
          
              <Input /*value={formValues.FirstName} onChange={handleChange}*//>
            </Form.Item>
           </div>
           

           <div className="input-Age">
              <Form.Item 
                name="age"
                label="Age"
                rules={[
                  {
                    required: true,
                  },{
                    validator: customAgeRangValidation
                  },
                  
                ]}
              >
                <InputNumber /*value={formValues.Age} onChange={handleChange}*//>
              </Form.Item>
           </div>


           <div className="Address-Select-1">
                <Form.Item
                name="gender"
                label="Address"
                rules={[
                  {
                    required: true
                  }
                ]}
                >
                <Select
                  placeholder="Select your province"
                  allowClear
                >
                  <Option value="Bangkok">Bangkok</Option>
                  <Option value="Phetchabun">Phetchabun</Option>
                  <Option value="Mae Hong Son">Mae Hong Son</Option>
                  <Option value="Khon Kaen">Khon Kaen</Option>
                  <Option value="Chaiyaphum">Chaiyaphum</Option>
                  <Option value="Foreign-country">Foreign country</Option>
                </Select>
              </Form.Item>
            </div>
            
            <div className="Address-Select-2">
              <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) =>
                  prevValues.gender !== currentValues.gender
                }
              >
                {({ getFieldValue }) =>
                  getFieldValue("gender") === "Foreign-country" ? (
                    <Form.Item
                      name="customizeGender"
                      label="Other"
                      rules={[
                        {
                          required: true
                        }
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  ) : null
                }
              </Form.Item>
            </div>



            <div className="Radio-Group">
                <Radio.Group name='radio' style={{marginBottom: '20px'}} >
                    <Radio value={1}>Male</Radio>
                    <Radio value={2}>Female</Radio>
                </Radio.Group>
            </div>


            <div className="Add-Skill">
                <Form
                name="dynamic_form_item"
                {...formItemLayoutWithOutLabel}
                onFinish={onFinish}
                >
                <Form.List
                  name="skill"
                  rules={[
                    {
                      validator: async (_, names) => {
                        if (!names || names.length < 2) {
                          return Promise.reject(new Error("At least 2 passengers"));
                        }
                      }
                    }
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
                                message:
                                  "Please input passenger's name or delete this field."
                              }
                            ]}
                            noStyle
                            >
                            <Input placeholder="Skills name"/>

                          </Form.Item>


                          {fields.length > 1 ? (
                            <MinusCircleOutlined
                              className="dynamic-delete-button"
                              onClick={() => remove(field.name)}
                            />
                          ) : null}
                        </Form.Item>
                      ))}


                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => add()}             
                          icon={<PlusOutlined />}
                        >
                          Add field
                        </Button>
                        
                        <Form.ErrorList errors={errors} />
                      </Form.Item>
                    </>
                  )}

                </Form.List>
              </Form>
            </div>




            
            
            <div className="Select-date">
              <Form.Item name="memberperiod">
                <RangePicker format="MMMM Do YYY" disabledDate={disabledDate} className="DatePicker-Date" />
              </Form.Item>
            </div>


            <div className="Checkbox-Group">
              <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange_Checkbox} />
            </div>
          

            <div style={{backgroundColor: 'white', borderRadius: '5px'}} className="Rate">
              <Rate />
            </div>

            <div className="Slider_Form">
              <Slider_Form />
            </div>


            <div className="Upload-form">
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
            </div>

            
            <div className="Mentions-form">
                <Mentions_Form />
            </div>



            <div className="Button-form">
                <Modal_Submit />
            </div>


          </Form>
          </>
        );
      };


export default Input_Form;
