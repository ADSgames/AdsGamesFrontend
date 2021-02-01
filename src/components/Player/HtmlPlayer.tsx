import React from "react";

import Card from "../Card";

const HtmlPlayer: React.FC = () => {
  React.useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://adsgames.s3.amazonaws.com/games/superarcherman/SuperArcherMan.js";
    script.async = true;
    script.type = "module";

    document.body.appendChild(script);

    return (): void => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Card>
      <div id="game-container">
        <canvas width="600" height="600" />
      </div>
      <iframe
        src="https://adsgames.s3.amazonaws.com/games/superarcherman/index.html"
        width="600"
        height="600"
      />
    </Card>
  );
};

export default HtmlPlayer;
