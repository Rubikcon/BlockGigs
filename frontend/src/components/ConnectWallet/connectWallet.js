import Onboard from "@web3-onboard/core";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";
import bitgetWalletModule from "@web3-onboard/bitget";
import phantomModule from "@web3-onboard/phantom";
import arcanaAuthModule from "@web3-onboard/arcana-auth";
import coinbaseWalletModule from "@web3-onboard/coinbase";

// initialize the module
const arcanaAuth = arcanaAuthModule({
  clientID: "4cddeeb9b65133a5ae588d70b0b87b43",
});

const injected = injectedModule();
const bitgetWallet = bitgetWalletModule(); // bitget wallet
const phantom = phantomModule(); // phantom
const coinbaseWalletSdk = coinbaseWalletModule(); // coinbase
const walletConnect = walletConnectModule({
  projectId: "4cddeeb9b65133a5ae588d70b0b87b43", // Get this from WalletConnect
  dappUrl: "https://blockgigs.xyz/",
});

const MAINNET_RPC_URL =
  "https://mainnet.infura.io/v3/69fff3735253474c97978866a460dab8";

// const coinbase = coinbaseModule();
const onboard = Onboard({
  theme: "dark",
  wallets: [
    injected,
    walletConnect,
    bitgetWallet,
    phantom,
    arcanaAuth,
    coinbaseWalletSdk,
  ],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl: MAINNET_RPC_URL,
    },
    {
      id: 42161,
      token: "ARB-ETH",
      label: "Arbitrum One",
      rpcUrl: "https://rpc.ankr.com/arbitrum",
    },
    {
      id: "0xa4ba",
      token: "ARB",
      label: "Arbitrum Nova",
      rpcUrl: "https://nova.arbitrum.io/rpc",
    },
    {
      id: "0x2105",
      token: "ETH",
      label: "Base",
      rpcUrl: "https://mainnet.base.org",
    },
    {
      id: "0xa4ec",
      token: "ETH",
      label: "Celo",
      rpcUrl: "https://1rpc.io/celo",
    },
    {
      id: 666666666,
      token: "DEGEN",
      label: "Degen",
      rpcUrl: "https://rpc.degen.tips",
    },
    {
      id: 2192,
      token: "SNAXETH",
      label: "SNAX Chain",
      rpcUrl: "https://mainnet.snaxchain.io",
    },
    {
      id: 534351,
      token: "ETH",
      label: "SCR",
      rpcUrl:
        "https://scroll-sepolia.infura.io/v3/69fff3735253474c97978866a460dab8",
    },
  ],

  appMetadata: {
    name: "Blockgigs",
    description: "A decentralized job posting application",
    icon: "https://www.blockgigs.xyz/assets/3dcube-DFj8uGyL.png",
    recommendedInjectedWallets: [
      { name: "MetaMask", url: "https://metamask.io" },
      { name: "Coinbase Wallet", url: "https://wallet.coinbase.com/" },
    ],
  },
});

export default onboard;
