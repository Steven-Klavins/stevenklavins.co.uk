import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import About from "../About/About";

Enzyme.configure({ adapter: new Adapter() });

describe("About", () => {
  it("should show the title", () => {
    const wrapper = shallow(<About />);
    const title = wrapper.find("h1");
    expect(title.text()).toBe("About");
  });
});
