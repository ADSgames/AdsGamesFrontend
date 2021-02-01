import * as React from "react";

import TextInput from "../Inputs/TextInput";
import TextArea from "../Inputs/TextArea";
import Button from "../Inputs/Button";
import { Formik, Form } from "formik";

const ContactForm: React.FC = () => (
  <Formik
    initialValues={{ name: "", email: "", message: "" }}
    onSubmit={(_values, { setSubmitting }): void => {
      setTimeout(() => {
        setSubmitting(false);
      }, 400);
    }}
  >
    <Form>
      <TextInput label="Name" placeholder="John Smith"></TextInput>
      <TextInput label="E-mail" placeholder="johnsmith@mail.com"></TextInput>
      <TextArea label="Message" placeholder="Type your message..."></TextArea>
      <Button>Send Message</Button>
    </Form>
  </Formik>
);

export default ContactForm;
