import "./contact.css";
import { Button, Checkbox, Form, Input, Flex,Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const { TextArea } = Input;

  return (
    <section id="contact" style={{ padding: "4rem 2rem" }}>
      <div className="contact-container">
        <div className=" contact-item-container">
          <p className="contact-title">Connect with me</p>
          <Typography style={{color:'white',fontSize:'18px'}}>
          I'm so glad you're here! Let's connect and see how we can work together.
          </Typography>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              gap: "1rem",
              alignContent:'center',
              justifyContent:'center',
              marginTop:'10px'
            }}
          >

            <Button
              className="contact-item"
              style={{
                border: "2px solid white",
                color: "white",
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              GitHub
              <FaGithub />
            </Button>
            <Button
              className="contact-item"
              style={{
                border: "2px solid white",
                color: "white",
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              LinkedIn
              <FaLinkedin />
            </Button>
            <Button
              className="contact-item"
              style={{
                border: "2px solid white",
                color: "white",
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Instagram
              <FaInstagram />
            </Button>
          </div>
        </div>
        <div className="contact-form">
          <Form
            name="login"
            initialValues={{
              remember: true,
            }}
            style={{
              maxWidth: 600,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="Your Name"
              rules={[
                {
                  required: true,
                  message: "Please input your Name!",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Your Name" />
            </Form.Item>
            <Form.Item
              name="Your Email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="email"
                placeholder="Your Email"
              />
            </Form.Item>
            <Form.Item name="Your Phone">
              <Input
                prefix={<LockOutlined />}
                type="phoneNumber"
                placeholder="Your Phone Number"
              />
            </Form.Item>
            <Form.Item name="Your Message">
              <TextArea
                rows={4}
                prefix={<LockOutlined />}
                placeholder="Your Message"
              />
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType="submit" style={{ backgroundColor: '#6c63ff', border: 'none' }}>
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
