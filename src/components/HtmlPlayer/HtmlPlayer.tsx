import React from "react";

import Card from "../Card";

import {
  FullScreenButton,
  GameLoader,
  GameLoaderText,
  StyledFrame,
} from "./HtmlPlayer.style";
import { LoadingSpinner } from "../Loaders";
import { GameFile } from "../../models";

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

const HtmlPlayer: React.FC<{ files?: GameFile[] }> = ({ files }) => {
  const [loading, setLoading] = React.useState(true);

  const embed = files?.find((file) => file.platform === "WEB");
  const frameRef = React.useRef<HTMLIFrameElement>(null);

  if (!embed) {
    return null;
  }

  return (
    <Card>
      {loading && (
        <GameLoader>
          <LoadingSpinner />
          <GameLoaderText>Loading Game</GameLoaderText>
        </GameLoader>
      )}

      <StyledFrame
        allowFullScreen
        src={embed.url}
        width="100%"
        height="600px"
        ref={frameRef}
        onLoad={() => setLoading(false)}
        visible={!loading}
      />

      <FullScreenButton
        onClick={() => {
          void requestFullScreen(frameRef);
        }}
      >
        {"Go Full Screen"}
      </FullScreenButton>
    </Card>
  );
};

export default HtmlPlayer;
