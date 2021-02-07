import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import Card from "../Card";
import Button from "../Inputs/Button";
import { GameFile, GameFilePlatform } from "../../models";
import { useListQuery } from "../../hooks/useListQuery";

const getPlatformIcon = (
  platform: GameFilePlatform | keyof typeof GameFilePlatform
): IconProp => {
  switch (platform) {
    case "WINDOWS":
      return ["fab", "windows"];
    case "MAC":
      return ["fab", "apple"];
    case "LINUX":
      return ["fab", "linux"];
    default:
      return ["fab", "windows"];
  }
};

const Downloads: React.FC<{ gameID: string }> = ({ gameID }) => {
  const { data: files } = useListQuery<GameFile>(GameFile, (c) =>
    c.gameID("eq", gameID)
  );

  const downloads = files
    .filter((file) => ["WINDOWS", "MAC", "LINUX"].includes(file.platform))
    .map((file) => ({ ...file, icon: getPlatformIcon(file.platform) }));

  if (downloads.length === 0) {
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
