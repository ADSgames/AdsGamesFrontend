import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import Card from "../components/Card";
import ContentHeader from "../components/ContentHeader";
import TextInput from "../components/Inputs/TextInput";
import TextArea from "../components/Inputs/TextArea";
import Button from "../components/Inputs/Button";
import FormHeader from "../components/FormLayout/FormHeader";
import { Formik, Form } from 'formik';

import MainLayout from "../layouts";
import { SEO } from "../components/SEO";

const ContactPage: React.FC = () => (
  <MainLayout>
    <SEO title="Contacts" />
    <Page>
      <Container>
        <ContentHeader text="Contact Us" />
        <Card>
          <FormHeader>
            <h3>Something on your mind?</h3>
            <p>You can shoot us an e-mail below.</p>  
          </FormHeader>
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <TextInput label="Name" placeholder="ex. John Smith"></TextInput>        
              <TextInput label="E-mail" placeholder="ex. johnsmith@mail.com"></TextInput> 
              <TextArea label="Message" placeholder="Type your message..."></TextArea>    
              <Button>Send Message</Button>    
            </Form>
          </Formik>
        </Card>

        <Card>
          <FormHeader>
            <h3>While you're at it, check these out!</h3>
          </FormHeader>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Card>
      </Container>
    </Page>
  </MainLayout>
);

export default ContactPage;
