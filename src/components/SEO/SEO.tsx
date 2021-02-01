import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
      }
    }
  }
`;

interface QueryType {
  site: {
    siteMetadata: {
      defaultTitle: string;
      titleTemplate: string;
      defaultDescription: string;
      siteUrl: string;
    };
  };
}

export const SEO: React.FC<{
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  article?: boolean;
}> = ({ title, description, image, pathname, article = false }) => {
  const {
    site: {
      siteMetadata: {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
      },
    },
  } = useStaticQuery<QueryType>(query);

  const seo = {
    title: title ?? defaultTitle,
    description: description ?? defaultDescription,
    image: `${siteUrl}${image ?? ""}`,
    url: `${siteUrl}${pathname ?? "/"}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta content={seo.description} name="description" />
      <meta content={seo.image} name="image" />
      {seo.url && <meta content={seo.url} property="og:url" />}
      {article && <meta content="article" property="og:type" />}
      {seo.title && <meta content={seo.title} property="og:title" />}
      {seo.description && (
        <meta content={seo.description} property="og:description" />
      )}
      {seo.image && <meta content={seo.image} property="og:image" />}
      <meta content="summary_large_image" name="twitter:card" />
      {seo.title && <meta content={seo.title} name="twitter:title" />}
      {seo.description && (
        <meta content={seo.description} name="twitter:description" />
      )}
      {seo.image && <meta content={seo.image} name="twitter:image" />}
    </Helmet>
  );
};
