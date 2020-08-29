import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ThreeD from "../3D/3D";

Enzyme.configure({ adapter: new Adapter() });

describe("3D", () => {
  it("should show the title", () => {
    const wrapper = shallow(<ThreeD />);
    const title = wrapper.find("h1");
    expect(title.text()).toBe("3D Printing & Electronics");
  });
});
