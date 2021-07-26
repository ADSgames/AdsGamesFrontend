import * as React from "react";

import Card from "../components/Card";
import ContentHeader from "../components/ContentHeader";
import FormHeader from "../components/FormLayout/FormHeader";
import ContactForm from "../components/ContactForm/ContactForm";

import MainLayout from "../layouts";

const ContactPage: React.FC = () => (
  <MainLayout title="Contacts">
    <ContentHeader text="Contact Us" />
    <Card padding={20}>
      <FormHeader>
        <h3>Something on your mind?</h3>
        <p>You can shoot us an e-mail below.</p>
      </FormHeader>
      <ContactForm />
    </Card>
  </MainLayout>
);

export default ContactPage;
