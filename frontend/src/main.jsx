import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// The connectors

// const { InjectedConnector, NetworkOnlyConnector } = Connectors;

// const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] });

// const Infura = new NetworkOnlyConnector({
//   providerURL: "https://mainnet.infura.io/v3/...",
// });

// const linea_mainnet = new NetworkOnlyConnector({
//   providerURL:
//     "https://linea-mainnet.infura.io/v3/69fff3735253474c97978866a460dab8",
// });

// const Base_Mainnet = new NetworkOnlyConnector({
//   providerURL:
//     "https://linea-mainnet.infura.io/v3/69fff3735253474c97978866a460dab8",
// });

// const connectors = { MetaMask, Infura, linea_mainnet, Base_Mainnet };

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Web3Provider */}
    {/* connectors={connectors} */}
    {/* libraryName={"ethers.js" | "web3.js" | null} */}
    {/* > */}
    {/* <Web3ReactProvider getLibrary={getLibrary}> */}
    <App />
    {/* </Web3Provider> */}
    {/* </Web3ReactProvider> */}
  </StrictMode>
);
