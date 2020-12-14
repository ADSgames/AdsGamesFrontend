import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import Card from "../components/Card";
import ContentHeader from "../components/ContentHeader";

import MainLayout from "../layouts";
import { SEO } from "../components/SEO";

const ContactPage: React.FC = () => (
  <MainLayout>
    <SEO title="Contacts" />
    <Page>
      <Container>
        <ContentHeader text="Contact" />

        <Card>
          <h1>Content here</h1>
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

        <Card>
          <h1>Content here</h1>
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
