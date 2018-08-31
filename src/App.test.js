import Enzyme from "enzyme";
import React from "react";
import { App, enhance } from "./App";

describe("<App/>", () => {
    describe("component", () => {
        it("should have div with text in it", () => {
            const wrapper = Enzyme.shallow(<App />);
            expect(wrapper.find("div").text()).toEqual("Test text");
        });
    });

    describe("enhancer", () => {
        it("should have props - testOne", () => {
            const MockComponent = () => null;
            const EnhancedComponent = enhance(MockComponent);
            const wrapper = Enzyme.mount(<EnhancedComponent />);
            const props = wrapper.find(MockComponent).props();
            expect(props.stateOne).toEqual("test one");
            expect(props.stateTwo).toEqual("test two");
        });
    });
});
