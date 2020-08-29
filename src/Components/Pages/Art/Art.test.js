import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Art from "../Art/Art";

Enzyme.configure({ adapter: new Adapter() });

describe("Art", () => {
  it("should show the title", () => {
    const wrapper = shallow(<Art />);
    const title = wrapper.find("h1");
    expect(title.text()).toBe("Art");
  });
});
