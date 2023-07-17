import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Form, Input, InputNumber } from "antd";

const App = () => {
  const form = useRef();

  const sendEmail = () => {
    form.current
      .validateFields()
      .then((values) => {
        emailjs
          .send(
            "service_qgwdj7f",
            "template_fn87ns6",
            values,
            "5xAo0GJGmMeTfUPd1"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const inputStyle = { width: "100%" };

  /* eslint-disable no-template-curly-in-string */
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
  /* eslint-enable no-template-curly-in-string */

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={sendEmail}
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
      ref={form}
      className="form"
    >
      <Form.Item
        name="user_name"
        label="Nombre"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Francisco Borja" />
      </Form.Item>
      <Form.Item
        name="user_email"
        label="Email"
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input placeholder="fjbl2788@gmail.com" />
      </Form.Item>
      <Form.Item
        name="age"
        label="Edad"
        rules={[
          {
            type: "number",
            min: 0,
            max: 99,
            required: true,
          },
        ]}
      >
        <InputNumber placeholder="35" />
      </Form.Item>
      <Form.Item
        name="phone_number"
        label="Teléfono"
        rules={[
          {
            type: "number",
            required: true,
          },
        ]}
      >
        <InputNumber placeholder="593961842276" style={inputStyle} />
      </Form.Item>
      <Form.Item
        name="message"
        label="Mensaje"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea placeholder="Hola, me gustaría colaborar con el proyecto..." />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
