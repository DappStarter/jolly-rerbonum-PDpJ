require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strong crawl sister evil hover problem equal genuine'; 
let testAccounts = [
"0xbf530f8dacbe5f4c0eb1f9f6bf8ac81739a3323ca246cad0dbc98bc3bc2b297c",
"0xc6e0d997f1cf15781d33afcd5769207a5e7d8912801df165343034fd99036a6b",
"0x74652c747fa896d1cf6888a7ada6c4d7774a9f0a38026e585a394db979bd3b4b",
"0xf81aac2c5cc2e380ab6c58cdc281b73af678ef5e96186954380fdc0711229f62",
"0x43032f516d10873031394b4373c7bb0b842ed73dbf6489e8b1b584d8651a3d3a",
"0x9fd200e1961a326c6e89e5f2a400376abf81e0e1d8d8551b4743499e2f483447",
"0xc3c5d2c2a6040143ff07b712eb68e5592185ee85550c2aaa66b59c52241d0dc7",
"0x446ab786282cab9a9d6d601d7626ff4dfaef8a38f195eadea426ab0cec98334f",
"0x25905517094f55ac1c0883357e016c5a6b90f1db076dd4b1031a29c48f0bbc3d",
"0xac78dfd1502d8244886a47e7ee0b0d5803cde2b47a7448b4988e102f42294bc4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

