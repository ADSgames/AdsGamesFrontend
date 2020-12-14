import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";

import IndexLayout from "../layouts";
import { SEO } from "../components/SEO";

const LearnPage: React.FC = () => (
  <IndexLayout>
    <SEO title="Learn" />
    <Page>
      <Container>
        <h1>Learn</h1>
      </Container>
    </Page>
  </IndexLayout>
);

export default LearnPage;
