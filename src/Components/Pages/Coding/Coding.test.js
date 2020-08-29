import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Coding from "../Coding/Coding";

Enzyme.configure({ adapter: new Adapter() });

describe("Coding", () => {
  it("should show the title", () => {
    const wrapper = shallow(<Coding />);
    const title = wrapper.find("h1");
    expect(title.text()).toBe("Software/Web Development");
  });
});
