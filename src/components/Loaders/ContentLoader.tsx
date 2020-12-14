import * as React from "react";

import { Content, ContentContainer } from "./ContentLoader.style";

export const ContentLoader: React.FC<{
  loading: boolean;
  loader: React.ReactNode;
  children: React.ReactNode;
}> = ({ loading = false, loader, children }) => (
  <ContentContainer>
    {loading ? <Content>{loader}</Content> : children}
  </ContentContainer>
);
