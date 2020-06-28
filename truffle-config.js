require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remain exchange hidden knife blue sister'; 
let testAccounts = [
"0xc9edeacc8be05e5bf5d2e61fcab7a880335b6ea263e66b1765ee5c7e5bbfefec",
"0xd63392f76af670a8ebf1dd2107b21f760d9b4ea7aa893ac1151373c9280c1e17",
"0x4c8b0dff9224b66a96c502ae2204099499beb612b59b33c29df377f001c9548b",
"0x7772f161b5e5e12933315cc5b6eff0cbb210bd51eedacf78171080c3897ef4be",
"0x68e7b5f3c7457a3810a89b1c20b4dfc172f0c21ecbb9718216e8f3be85b773df",
"0x4d11a5b9df9b8a5530bfae6f62143a63b1fb77a63e73d0e11e296001dc49b883",
"0x6cf9c58a9bfad8404f5ff89138f6c5c2774e6efb4c33e6174e5acca7ef7bb928",
"0x6cb77437e273a04c88fdb6788a3cdc7a64c914efb158bee68fa986e19723802b",
"0xf2ad23fecfe5918df9fe38084d44188acf6112a8d6dce9521a4d622de01b058e",
"0x8842831545b9b564dab621e2d7145a00a62420359def693e78ebc095282dd7a4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
