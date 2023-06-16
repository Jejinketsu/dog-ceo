import React from "react";
import renderer from "react-test-renderer";
import Button from "../components/atoms/Button";

test("renders correctly", () => {
  const tree = renderer
    .create(<Button IconProps={{ name: "hearth", size: 24, color: "black" }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
