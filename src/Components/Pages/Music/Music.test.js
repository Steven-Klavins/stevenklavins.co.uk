import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Music from "../Music/Music";

Enzyme.configure({ adapter: new Adapter() });

describe("Music", () => {
  it("should show the title", () => {
    const wrapper = shallow(<Music />);
    const title = wrapper.find("h1");
    expect(title.text()).toBe("Music");
  });
});
