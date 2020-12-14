import React from "react";

import { StyledContentHeader } from "./ContentHeader.style";

const ContentHeader: React.FC<{ text: string; sticky?: boolean }> = ({
  text,
  sticky = false,
}) => <StyledContentHeader sticky={sticky}>{text}</StyledContentHeader>;

export default ContentHeader;
