import { getWeb3 } from "../utils/web3";
import ElectionInterface from "./ElectionInterface.js";

function ElectionContract(address) {
  const web3 = getWeb3();

  return new web3.eth.Contract(ElectionInterface.abi, address);
}

export default ElectionContract;
