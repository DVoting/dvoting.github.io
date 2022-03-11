import web3 from "../utils/web3";
import ElectionInterface from "./ElectionInterface.js";

function ElectionContract(address) {
  return new web3.eth.Contract(ElectionInterface.abi, address);
}

export default ElectionContract;
