import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import Card from "../components/Card";
import ContentHeader from "../components/ContentHeader";

import IndexLayout from "../layouts";
import { SEO } from "../components/SEO";

const MembersPage: React.FC = () => (
  <IndexLayout>
    <SEO title="Members" />
    <Page>
      <Container>
        <ContentHeader text="Members" />

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
  </IndexLayout>
);

export default MembersPage;
