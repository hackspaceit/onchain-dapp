import { useCallback } from 'react';
import {
  Swap,
  SwapAmountInput,
  SwapButton,
  SwapMessage,
  SwapToggleButton,
} from '@coinbase/onchainkit/swap';
import type { Token } from '@coinbase/onchainkit/token';
import { useAccount } from 'wagmi';
import type {
  BuildSwapTransaction,
  SwapError,
} from '@coinbase/onchainkit/swap';

export default function SwapComponents() {
  const { address } = useAccount();

  const DEGENToken: Token = {
    name: 'DEGEN',
    address: '0x4ed4e862860bed51a9570b96d89af5e1b0efefed',
    symbol: 'DEGEN',
    decimals: 18,
    image:
      'https://d3r81g40ycuhqg.cloudfront.net/wallet/wais/3b/bf/3bbf118b5e6dc2f9e7fc607a6e7526647b4ba8f0bea87125f971446d57b296d2-MDNmNjY0MmEtNGFiZi00N2I0LWIwMTItMDUyMzg2ZDZhMWNm',
    chainId: 8453,
  };

  const ETHToken: Token = {
    name: 'ETH',
    address: '',
    symbol: 'ETH',
    decimals: 18,
    image:
      'https://wallet-api-production.s3.amazonaws.com/uploads/tokens/eth_288.png',
    chainId: 8453,
  };

  const NounsToken: Token = {
    name: 'NOUNS',
    address: '0x0a93a7BE7e7e426fC046e204C44d6b03A302b631',
    symbol: 'NOUNS',
    decimals: 18,
    image:
      '/vibes/nouns.png',
    chainId: 8453,
  };

  const BrettToken: Token = {
    name: 'BRETT',
    address: '0x532f27101965dd16442E59d40670FaF5eBB142E4',
    symbol: 'BRETT',
    decimals: 18,
    image:
      'https://basescan.org/token/images/brettbased_32.png',
    chainId: 8453,
  };

  

  const WETHToken: Token = {
    name: 'Wrapped Ether',
    address: '0x4200000000000000000000000000000000000006',
    symbol: 'WETH',
    decimals: 6,
    image:
      'https://d3r81g40ycuhqg.cloudfront.net/wallet/wais/47/bc/47bc3593c2dec7c846b66b7ba5f6fa6bd69ec34f8ebb931f2a43072e5aaac7a8-YmUwNmRjZDUtMjczYy00NDFiLWJhZDUtMzgwNjFmYWM0Njkx',
    chainId: 8453,
  };

  const swappableTokens = [DEGENToken, NounsToken, BrettToken, ETHToken , WETHToken];

  const onSubmit = useCallback((swapTransaction: BuildSwapTransaction) => {
    console.log('swapTransaction:', swapTransaction);
  }, []);

  return (
    <main className="flex items-center space-x-4">
      {address ? (
        <Swap address={address}>
          <SwapAmountInput
            label="Sell"
            swappableTokens={swappableTokens}
            token={ETHToken}
            type="from"
          />
          <SwapToggleButton />
          
          <SwapButton onSubmit={onSubmit} />
          <SwapMessage />
        </Swap>
      ) : (
        <p>Connect wallet to use Swap components</p>
      )}
    </main>
  );
}
