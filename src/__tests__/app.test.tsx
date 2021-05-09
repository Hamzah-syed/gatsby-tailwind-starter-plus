// MyComponent.test.js
import React from "react"
import { shallow } from "enzyme"
import Index from "../pages/index"

describe("MyComponent", () => {
  it("Renders component without crashing", () => {
    const wrapper = shallow(<Index />)
    console.log(wrapper.debug())
    expect(wrapper.exists()).toBe(true)
  })
})
