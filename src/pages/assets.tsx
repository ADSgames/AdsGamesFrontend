import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";

import IndexLayout from "../layouts";
import { SEO } from "../components/SEO";

const AssetsPage: React.FC = () => (
  <IndexLayout>
    <SEO title="Assets" />
    <Page>
      <Container>
        <h1>Assets</h1>
      </Container>
    </Page>
  </IndexLayout>
);

export default AssetsPage;
