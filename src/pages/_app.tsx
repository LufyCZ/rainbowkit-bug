import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import { config } from "../wagmi";

const client = new QueryClient();

function MyApp() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <div style={{ height: "100vh" }}>
          <RainbowKitProvider>
            <div style={{ height: "100%", background: "red" }}>
              <p>lorem ipsum</p>
            </div>
          </RainbowKitProvider>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
