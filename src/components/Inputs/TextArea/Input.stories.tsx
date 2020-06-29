import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Input from ".";

export default {
  title: "Input",
  decorators: [withKnobs],
};

export const Default = () => <Input label={text("Label", "Label")} type={select("Type", ["text", "password"], "top")} />;
