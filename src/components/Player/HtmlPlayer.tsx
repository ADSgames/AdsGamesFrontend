import React from "react";

import Card from "../Card";

import type { GameFile } from "../../models";
import { StyledFrame } from "./HtmlPlayer.style";

const requestFullScreen = async (
  element: React.RefObject<HTMLIFrameElement>
): Promise<void> => {
  if (!element.current) {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const requestMethod = element.current.requestFullscreen;

  // eslint-disable-next-line
  if (requestMethod) {
    await requestMethod.call(element.current);
  }
};

const HtmlPlayer: React.FC<{ files: GameFile[] }> = ({ files }) => {
  const embed = files.find((file) => file.type === "embed");
  const frameRef = React.useRef<HTMLIFrameElement>(null);

  if (!embed) {
    return null;
  }

  return (
    <Card>
      <div
        onClick={() => {
          void requestFullScreen(frameRef);
        }}
      >
        {"FullScreen!"}
      </div>
      <StyledFrame
        allowFullScreen
        src={embed.url}
        width="100%"
        height="600px"
        ref={frameRef}
      />
    </Card>
  );
};

export default HtmlPlayer;
