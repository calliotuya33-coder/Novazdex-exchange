import { configureChains, createConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { metaMaskWallet, trustWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';
import { bscMainnet, bscTestnet } from './chains';

const projectId = process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID || 'c34b8c56e01a4e107df0df51e9e71b2d';

export const { chains, publicClient, webSocketPublicClient } = configureChains(
  [bscMainnet, bscTestnet],
  [publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
    ],
  },
]);

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});
