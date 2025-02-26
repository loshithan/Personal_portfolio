import "./contact.css";
import { Button, Checkbox, Form, Input, Flex, Typography } from "antd";
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
          <Typography
            style={{
              color: "white",
              fontSize: "1rem",
              width: "80%",
              marginTop: "2rem",
            }}
          >
            I'm so glad you're here! Let's connect and see how we can work
            together.
          </Typography>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              gap: "1rem",
              alignContent: "center",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Button
              className="relative flex items-center justify-center overflow-hidden border-2 border-white text-white shadow-2xl transition-all 
 before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#7562E0] before:duration-500 before:ease-out 
 hover:shadow-[#7562E0] hover:before:h-56 hover:before:w-56 hover:bg-[#7562E0] hover:border-0 
 active:border-transparent"
 onClick={() => {
  window.open("https://github.com/loshithan", "_blank");
}}
              style={{
                backgroundColor: "transparent",
                outline: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span className="relative z-10">GitHub</span>
              <FaGithub className="relative z-10" />
            </Button>
            <Button
              className="relative flex items-center justify-center overflow-hidden border-2 border-white text-white shadow-2xl transition-all 
              before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#7562E0] before:duration-500 before:ease-out 
              hover:shadow-[#7562E0] hover:before:h-56 hover:before:w-56 hover:bg-[#7562E0] hover:border-0 
              active:border-transparent"
              style={{
                backgroundColor: "transparent",
                outline: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              onClick={() => {
                window.open("https://www.linkedin.com/in/loshithan-paramaguru-11746b222", "_blank");
              }}
            >
              <span className="relative z-10">LinkedIn</span>
              <FaLinkedin className="relative z-10" />
            </Button>
            <Button
              className="relative flex items-center justify-center overflow-hidden border-2 border-white text-white shadow-2xl transition-all 
             before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#7562E0] before:duration-500 before:ease-out 
             hover:shadow-[#7562E0] hover:before:h-56 hover:before:w-56 hover:bg-[#7562E0] hover:border-0 
             active:border-transparent"
              style={{
                backgroundColor: "transparent",
                outline: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              onClick={() => {
                window.open("https://www.instagram.com/its_yoshi__?igsh=OWYxcTgxaml5dmxr", "_blank");
              }}
            >
              <span className="relative z-10">Instagram</span>
              <FaInstagram className="relative z-10" />
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
              <Button
                block
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: "#6c63ff", border: "none" }}
              >
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
