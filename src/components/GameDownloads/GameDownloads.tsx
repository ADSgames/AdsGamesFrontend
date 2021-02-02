import React from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

import type { GameFile, GameFilePlatform } from "../../models";
import Card from "../Card";
import Button from "../Inputs/Button";

const getPlatformIcon = (platform: GameFilePlatform): IconProp => {
  switch (platform) {
    case "windows":
      return ["fab", "windows"];
    case "mac":
      return ["fab", "apple"];
    case "linux":
      return ["fab", "linux"];
    default:
      return ["fab", "windows"];
  }
};

const Downloads: React.FC<{ files: GameFile[] }> = ({ files }) => {
  const downloads = files
    .filter((file) => ["windows", "mac", "linux"].includes(file.platform))
    .map((file) => ({ ...file, icon: getPlatformIcon(file.platform) }));

  if (!downloads.length) {
    return null;
  }

  return (
    <Card title="Download">
      {downloads.map((file) => (
        <a key={file.url} href={file.url}>
          <Button icon={file.icon}>{"Download"}</Button>
        </a>
      ))}
    </Card>
  );
};

export default Downloads;
