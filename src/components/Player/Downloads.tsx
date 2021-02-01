import React from "react";
import type { GameFile } from "../../models";

import Card from "../Card";

const Downloads: React.FC<{ files: GameFile[] }> = ({ files }) => {
  if (!files.length) {
    return null;
  }

  return (
    <Card title="downloads">
      {files.map((file) => (
        <a key={file.url} href={file.url}>
          {"Download"}
        </a>
      ))}
    </Card>
  );
};

export default Downloads;
