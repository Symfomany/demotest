import HelloWorld from "../HelloWorld";
import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe(HelloWorld, () => {
  it("renders and matches our snapshot", () => {
    const component = renderer.create(<HelloWorld name="Person" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // component.find('button.frenchify').simulate('click');
    // component.find('button.remove').simulate('click');
    // expect(mockRemoveGreeting).toBeCalled();
    //expect(component.text()).toContain(name);
  });
});
