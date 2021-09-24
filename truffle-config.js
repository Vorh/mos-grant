const path = require('path')
const fs = require('fs');
const HDWalletProvider = require("@truffle/hdwallet-provider");

let secrets = JSON.parse(fs.readFileSync('./secrets.json'));

module.exports = {
  contracts_build_directory: path.join(__dirname, "vapp/src/contracts"),

  networks: {

    dev: { //poligon  local fork
      host: "127.0.0.1",
      port: 8555,
      network_id: "137"
    },

    polygon: {
      provider: function() {
        return new HDWalletProvider(
            secrets.polygon.pk,
            secrets.polygon.infura
        )
      },
      network_id: 137,
      gasPrice: 15000000000,
      networkCheckTimeout: 1000000000,
    },


  },

  compilers: {
    solc: {
      version: "0.8.6"
    }
  },

};
