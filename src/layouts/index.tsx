import * as React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import "modern-normalize";
import "../styles/normalize";

import Header from "../components/Header";
import LayoutRoot from "../components/LayoutRoot";
import LayoutMain from "../components/LayoutMain";
import Footer from "../components/Footer";
import { SEO } from "../components/SEO";
import Page from "../components/Page";
import Container from "../components/Container";

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
    };
  };
}

const IndexLayout: React.FC<{ title?: string }> = ({ title, children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps): React.ReactNode => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description,
            },
            { name: "keywords", content: data.site.siteMetadata.keywords },
          ]}
        />
        <Header />
        <SEO title={title ?? data.site.siteMetadata.title} />
        <LayoutMain>
          <Page>
            <Container>{children}</Container>
          </Page>
        </LayoutMain>
        <Footer />
      </LayoutRoot>
    )}
  />
);

export default IndexLayout;
