import { getWeb3 } from "../utils/web3";
import ElectionFactoryInterface from "./ElectionFactoryInterface.js";

// not sure about this
const address = "";

const web3 = getWeb3();

const factoryContract = new web3.eth.Contract(
  ElectionFactoryInterface.abi,
  address
);
export default factoryContract;
