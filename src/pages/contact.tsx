import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import Card from "../components/Card";
import ContentHeader from "../components/ContentHeader";
import FormHeader from "../components/FormLayout/FormHeader";
import ContactForm from "../components/ContactForm/ContactForm";

import MainLayout from "../layouts";
import { SEO } from "../components/SEO";

const ContactPage: React.FC = () => (
  <MainLayout>
    <SEO title="Contacts" />
    <Page>
      <Container>
        <ContentHeader text="Contact Us" />
        <Card padding={20}>
          <FormHeader>
            <h3>Something on your mind?</h3>
            <p>You can shoot us an e-mail below.</p>
          </FormHeader>
          <ContactForm />
        </Card>

        <Card padding={20}>
          <FormHeader>
            <h3>While you&apos;re at it, check these out!</h3>
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
