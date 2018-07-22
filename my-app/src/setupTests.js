/*
We have a couple of standard imports we’ll need for most tests that we write for our components, 
taking advantage of Jest’s awesome snapshot feature and Enzyme’s awesome shallow renderer. 
To be able to use this as of React v16, we’ll also need to include a setup file that tells Enzyme and Jest what adapters to use.
Create a new file in src called src/setupTests.js and give it the following body:
*/

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
