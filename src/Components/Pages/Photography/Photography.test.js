import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Photography from "../Photography/Photography";

Enzyme.configure({ adapter: new Adapter() });

describe("Photography", () => {
  it("should show the title", () => {
    const wrapper = shallow(<Photography />);
    const title = wrapper.find("h1");
    expect(title.text()).toBe("Photography");
  });
});
