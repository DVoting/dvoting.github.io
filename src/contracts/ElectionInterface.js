const ElectionInterface = {
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_title",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_openBlockTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_closeBlockTime",
          "type": "uint256"
        },
        {
          "internalType": "string[]",
          "name": "_names",
          "type": "string[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "nVoters",
          "type": "uint256"
        }
      ],
      "name": "Approve",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "nVoters",
          "type": "uint256"
        }
      ],
      "name": "Ban",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "nVote",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "indexed": false,
          "internalType": "struct Election.Candidate[]",
          "name": "candidates",
          "type": "tuple[]"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "nVotes",
          "type": "uint256"
        }
      ],
      "name": "Vote",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "addVote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "appearedVotersMap",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "approveVoter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "approvedVotersMap",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "banVoter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "candidates",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "nVote",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "closeBlockTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBlockTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCandidates",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "nVote",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "internalType": "struct Election.Candidate[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCurrentStatus",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "nVote",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "internalType": "struct Election.Candidate[]",
          "name": "",
          "type": "tuple[]"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isOpen",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "manager",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nCandidates",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nVoters",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nVotes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "openBlockTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "title",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "evm": {
    "bytecode": {
      "object": "60806040523480156200001157600080fd5b50604051620020fc380380620020fc833981810160405281019062000037919062000390565b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508360069080519060200190620000909291906200017c565b5082600481905550816005819055506000600381905550600060028190555060005b815181101562000171576000604051806060016040528083815260200160008152602001848481518110620000ec57620000eb62000626565b5b60200260200101518152509050600081908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000155602082015181600101556040820151816002019080519060200190620001579291906200017c565b50505050808062000168906200057a565b915050620000b2565b5050505050620006c8565b8280546200018a906200050e565b90600052602060002090601f016020900481019282620001ae5760008555620001fa565b82601f10620001c957805160ff1916838001178555620001fa565b82800160010185558215620001fa579182015b82811115620001f9578251825591602001919060010190620001dc565b5b5090506200020991906200020d565b5090565b5b80821115620002285760008160009055506001016200020e565b5090565b6000620002436200023d8462000469565b62000440565b9050808382526020820190508285602086028201111562000269576200026862000689565b5b60005b85811015620002be57815167ffffffffffffffff81111562000293576200029262000684565b5b808601620002a2898262000346565b855260208501945060208401935050506001810190506200026c565b5050509392505050565b6000620002df620002d98462000498565b62000440565b905082815260208101848484011115620002fe57620002fd6200068e565b5b6200030b848285620004d8565b509392505050565b600082601f8301126200032b576200032a62000684565b5b81516200033d8482602086016200022c565b91505092915050565b600082601f8301126200035e576200035d62000684565b5b815162000370848260208601620002c8565b91505092915050565b6000815190506200038a81620006ae565b92915050565b60008060008060808587031215620003ad57620003ac62000698565b5b600085015167ffffffffffffffff811115620003ce57620003cd62000693565b5b620003dc8782880162000346565b9450506020620003ef8782880162000379565b9350506040620004028782880162000379565b925050606085015167ffffffffffffffff81111562000426576200042562000693565b5b620004348782880162000313565b91505092959194509250565b60006200044c6200045f565b90506200045a828262000544565b919050565b6000604051905090565b600067ffffffffffffffff82111562000487576200048662000655565b5b602082029050602081019050919050565b600067ffffffffffffffff821115620004b657620004b562000655565b5b620004c1826200069d565b9050602081019050919050565b6000819050919050565b60005b83811015620004f8578082015181840152602081019050620004db565b8381111562000508576000848401525b50505050565b600060028204905060018216806200052757607f821691505b602082108114156200053e576200053d620005f7565b5b50919050565b6200054f826200069d565b810181811067ffffffffffffffff8211171562000571576200057062000655565b5b80604052505050565b60006200058782620004ce565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415620005bd57620005bc620005c8565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b620006b981620004ce565b8114620006c557600080fd5b50565b611a2480620006d86000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806347535d7b116100a257806387ceff091161007157806387ceff09146102ac5780638a671dbb146102ca5780639b1e7e6e146102e8578063a005a48c14610304578063a3dd2619146103225761010b565b806347535d7b14610234578063481c6a75146102525780634a79d50c14610270578063727f34e21461028e5761010b565b8063119d4ddb116100de578063119d4ddb1461019857806316011867146101b45780631f3e7439146101e45780633477ee2e146102025761010b565b80630383badc1461011057806305a72eba1461012c57806306a49fce1461015c578063081e5b751461017a575b600080fd5b61012a60048036038101906101259190610f06565b610345565b005b61014660048036038101906101419190610ed9565b6105d2565b6040516101539190611446565b60405180910390f35b6101646105f2565b6040516101719190611385565b60405180910390f35b6101826106f7565b60405161018f9190611583565b60405180910390f35b6101b260048036038101906101ad9190610ed9565b6106fd565b005b6101ce60048036038101906101c99190610ed9565b6108c8565b6040516101db9190611446565b60405180910390f35b6101ec6108e8565b6040516101f99190611583565b60405180910390f35b61021c60048036038101906102179190610f06565b6108ee565b60405161022b9392919061159e565b60405180910390f35b61023c6109b0565b6040516102499190611446565b60405180910390f35b61025a6109cb565b6040516102679190611341565b60405180910390f35b6102786109f1565b6040516102859190611461565b60405180910390f35b610296610a7f565b6040516102a39190611583565b60405180910390f35b6102b4610a8b565b6040516102c19190611583565b60405180910390f35b6102d2610a93565b6040516102df9190611583565b60405180910390f35b61030260048036038101906102fd9190610ed9565b610a99565b005b61030c610cf0565b6040516103199190611583565b60405180910390f35b61032a610cf6565b60405161033c969594939291906113a7565b60405180910390f35b60045442101561038a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610381906114c3565b60405180910390fd5b6005544211156103cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c690611523565b60405180910390fd5b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661045b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045290611503565b60405180910390fd5b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156104e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104df906114a3565b60405180910390fd5b6001600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506000818154811061055457610553611826565b5b906000526020600020906003020160010160008154809291906105769061177f565b91905055506003600081548092919061058e9061177f565b91905055507f7caae67c962494f25046918fb68657a7078d3adaf01f441f8180647c7bbb12cb60006003546040516105c7929190611416565b60405180910390a150565b60086020528060005260406000206000915054906101000a900460ff1681565b60606000805480602002602001604051908101604052809291908181526020016000905b828210156106ee5783829060005260206000209060030201604051806060016040529081600082015481526020016001820154815260200160028201805461065d90611733565b80601f016020809104026020016040519081016040528092919081815260200182805461068990611733565b80156106d65780601f106106ab576101008083540402835291602001916106d6565b820191906000526020600020905b8154815290600101906020018083116106b957829003601f168201915b50505050508152505081526020019060010190610616565b50505050905090565b60055481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461078d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078490611543565b60405180910390fd5b600760008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561081a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081190611563565b60405180910390fd5b6001600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600260008154809291906108859061177f565b91905055507f90ec57f18fa7b15c6b8d5e4d1deb90796c74b2ff23d4d0cecad0cb42a96b3128816002546040516108bd92919061135c565b60405180910390a150565b60076020528060005260406000206000915054906101000a900460ff1681565b60035481565b600081815481106108fe57600080fd5b906000526020600020906003020160009150905080600001549080600101549080600201805461092d90611733565b80601f016020809104026020016040519081016040528092919081815260200182805461095990611733565b80156109a65780601f1061097b576101008083540402835291602001916109a6565b820191906000526020600020905b81548152906001019060200180831161098957829003601f168201915b5050505050905083565b600042600454111580156109c657506005544211155b905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600680546109fe90611733565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2a90611733565b8015610a775780601f10610a4c57610100808354040283529160200191610a77565b820191906000526020600020905b815481529060010190602001808311610a5a57829003601f168201915b505050505081565b60008080549050905090565b600042905090565b60025481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2090611543565b60405180910390fd5b600760008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610bb5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bac906114e3565b60405180910390fd5b600860008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610c42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3990611483565b60405180910390fd5b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060026000815480929190610cad90611709565b91905055507f357a3f1cf67c910fe298ca632230d82fcc73d127146d317a885d4dac07c2a5dd81600254604051610ce592919061135c565b60405180910390a150565b60045481565b606060008060008060606000600254600354600454600554600685805480602002602001604051908101604052809291908181526020016000905b82821015610e0957838290600052602060002090600302016040518060600160405290816000820154815260200160018201548152602001600282018054610d7890611733565b80601f0160208091040260200160405190810160405280929190818152602001828054610da490611733565b8015610df15780601f10610dc657610100808354040283529160200191610df1565b820191906000526020600020905b815481529060010190602001808311610dd457829003601f168201915b50505050508152505081526020019060010190610d31565b505050509550808054610e1b90611733565b80601f0160208091040260200160405190810160405280929190818152602001828054610e4790611733565b8015610e945780601f10610e6957610100808354040283529160200191610e94565b820191906000526020600020905b815481529060010190602001808311610e7757829003601f168201915b50505050509050955095509550955095509550909192939495565b600081359050610ebe816119c0565b92915050565b600081359050610ed3816119d7565b92915050565b600060208284031215610eef57610eee611855565b5b6000610efd84828501610eaf565b91505092915050565b600060208284031215610f1c57610f1b611855565b5b6000610f2a84828501610ec4565b91505092915050565b6000610f3f838361126c565b905092915050565b6000610f5383836112bc565b905092915050565b610f648161168e565b82525050565b6000610f7582611616565b610f7f8185611651565b935083602082028501610f91856115dc565b8060005b85811015610fcd5784840389528151610fae8582610f33565b9450610fb983611637565b925060208a01995050600181019050610f95565b50829750879550505050505092915050565b6000610fea82611621565b610ff48185611651565b935083602082028501611006856115ec565b8060005b85811015611041578484038952816110228582610f47565b945061102d83611644565b925060208a0199505060018101905061100a565b50829750879550505050505092915050565b61105c816116a0565b82525050565b600061106d8261162c565b6110778185611662565b93506110878185602086016116d6565b6110908161185a565b840191505092915050565b60006110a68261162c565b6110b08185611673565b93506110c08185602086016116d6565b6110c98161185a565b840191505092915050565b600081546110e181611733565b6110eb8186611662565b9450600182166000811461110657600181146111185761114b565b60ff198316865260208601935061114b565b61112185611601565b60005b8381101561114357815481890152600182019150602081019050611124565b808801955050505b50505092915050565b6000611161600d83611673565b915061116c82611878565b602082019050919050565b6000611184601683611673565b915061118f826118a1565b602082019050919050565b60006111a7601d83611673565b91506111b2826118ca565b602082019050919050565b60006111ca601b83611673565b91506111d5826118f3565b602082019050919050565b60006111ed601c83611673565b91506111f88261191c565b602082019050919050565b6000611210601583611673565b915061121b82611945565b602082019050919050565b6000611233601083611673565b915061123e8261196e565b602082019050919050565b6000611256601d83611673565b915061126182611997565b602082019050919050565b60006060830160008301516112846000860182611323565b5060208301516112976020860182611323565b50604083015184820360408601526112af8282611062565b9150508091505092915050565b60006060830160008084015490506112d381611765565b6112e06000870182611323565b50600184015490506112f181611765565b6112fe6020870182611323565b5060028401858303604087015261131583826110d4565b925050819250505092915050565b61132c816116cc565b82525050565b61133b816116cc565b82525050565b60006020820190506113566000830184610f5b565b92915050565b60006040820190506113716000830185610f5b565b61137e6020830184611332565b9392505050565b6000602082019050818103600083015261139f8184610f6a565b905092915050565b600060c08201905081810360008301526113c18189610f6a565b90506113d06020830188611332565b6113dd6040830187611332565b6113ea6060830186611332565b6113f76080830185611332565b81810360a0830152611409818461109b565b9050979650505050505050565b600060408201905081810360008301526114308185610fdf565b905061143f6020830184611332565b9392505050565b600060208201905061145b6000830184611053565b92915050565b6000602082019050818103600083015261147b818461109b565b905092915050565b6000602082019050818103600083015261149c81611154565b9050919050565b600060208201905081810360008301526114bc81611177565b9050919050565b600060208201905081810360008301526114dc8161119a565b9050919050565b600060208201905081810360008301526114fc816111bd565b9050919050565b6000602082019050818103600083015261151c816111e0565b9050919050565b6000602082019050818103600083015261153c81611203565b9050919050565b6000602082019050818103600083015261155c81611226565b9050919050565b6000602082019050818103600083015261157c81611249565b9050919050565b60006020820190506115986000830184611332565b92915050565b60006060820190506115b36000830186611332565b6115c06020830185611332565b81810360408301526115d2818461109b565b9050949350505050565b6000819050602082019050919050565b60008190508160005260206000209050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081549050919050565b600081519050919050565b6000602082019050919050565b6000600382019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000819050919050565b6000611699826116ac565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156116f45780820151818401526020810190506116d9565b83811115611703576000848401525b50505050565b6000611714826116cc565b91506000821415611728576117276117c8565b5b600182039050919050565b6000600282049050600182168061174b57607f821691505b6020821081141561175f5761175e6117f7565b5b50919050565b60006117786117738361186b565b611684565b9050919050565b600061178a826116cc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156117bd576117bc6117c8565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b6000601f19601f8301169050919050565b60008160001c9050919050565b7f616c726561647920766f74656400000000000000000000000000000000000000600082015250565b7f796f75206861766520616c726561647920766f74656400000000000000000000600082015250565b7f766f74696e6720706861736520686173206e6f7420737461727465642e000000600082015250565b7f726571756972657320616e20617070726f7665642077616c6c65740000000000600082015250565b7f796f7520617265206e6f7420656c696769626c6520746f20766f746500000000600082015250565b7f766f74696e67207068617365206973206f7665722e0000000000000000000000600082015250565b7f7265717569726573206d616e6167657200000000000000000000000000000000600082015250565b7f726571756972657320616e20756e617070726f7665642077616c6c6574000000600082015250565b6119c98161168e565b81146119d457600080fd5b50565b6119e0816116cc565b81146119eb57600080fd5b5056fea2646970667358221220105cff72cacaaf0fa256fdc0c9e0df5d4a8a7b15eec4369455461ffd3637224f64736f6c63430008070033"
    }
  }
}


export default ElectionInterface