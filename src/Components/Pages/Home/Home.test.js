import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "../Home/Home";

Enzyme.configure({ adapter: new Adapter() });

describe("Home", () => {
  it("should show the title", () => {
    const wrapper = shallow(<Home location={location} />);
    const title = wrapper.find("h1");
    expect(title.text()).toBe("Bridging the gap between tech and art");
  });
});
