import web3 from "../utils/web3";
import ElectionFactoryInterface from "./ElectionFactoryInterface.js";

// not sure about this
const address = "0xa185aE0ECeAef45b88Aba4A1ABD45413F1F3F239";

const factoryContract = new web3.eth.Contract(
  ElectionFactoryInterface.abi,
  address
);
export default factoryContract;
