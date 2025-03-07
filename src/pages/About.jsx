import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col items-center w-full p-6 text-white">
      <div className="max-w-3xl">
        <h1 className="text-4xl text-violet-800 font-bold mb-6 text-center">
          Welcome to <span className='text-orange-400'>Cryptonite</span>
        </h1>
        
        <p className="text-lg text-center mb-6 leading-relaxed">
          Cryptonite aims to provide users with comprehensive and up-to-date information 
          on a rapidly evolving market. The platform is designed with a user-friendly interface,
          offering key market insights and tools to help traders and enthusiasts make informed decisions.
        </p>

        <h2 className="text-2xl text-violet-800 font-semibold mt-8 mb-3 border-b pb-2">Key Features</h2>
        <ul className="text-lg mb-6 list-disc pl-5">
          <li>Real-Time Market Data: Live prices, trends, and historical data for various cryptocurrencies.</li>
          <li>Watchlist Functionality: Users can bookmark specific cryptocurrencies for easy tracking.</li>
        </ul>

        <h2 className="text-2xl text-violet-800 font-semibold mt-8 mb-3 border-b pb-2">What is Cryptocurrency?</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Cryptocurrency is a form of digital money that operates independently of traditional banks. Unlike physical cash, it exists purely in digital form and relies on blockchain technology to ensure security and transparency.
        </p>

        <h2 className="text-2xl text-violet-800 font-semibold mt-8 mb-3 border-b pb-2">How Does It Work?</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Cryptocurrencies function on decentralized networks powered by blockchain technology. Each transaction is recorded on a distributed ledger, making it secure, transparent, and nearly impossible to alter.
        </p>

        <h2 className="text-2xl text-violet-800 font-semibold mt-8 mb-3 border-b pb-2">Popular Cryptocurrencies</h2>
        <ul className="text-lg mb-6 list-disc pl-5">
          <li><strong>Bitcoin (BTC):</strong> The first and most well-known cryptocurrency, created by Satoshi Nakamoto in 2009.</li>
          <li><strong>Ethereum (ETH):</strong> A blockchain that enables smart contracts and decentralized applications (DApps).</li>
          <li><strong>Binance Coin (BNB):</strong> A utility token for the Binance exchange with multiple use cases.</li>
          <li><strong>Solana (SOL):</strong> Known for its speed and scalability in processing transactions.</li>
        </ul>

        <h2 className="text-2xl text-violet-800 font-semibold mt-8 mb-3 border-b pb-2">What is Blockchain?</h2>
        <p className="text-lg mb-6 leading-relaxed">
          A blockchain is a decentralized digital ledger that records transactions across many computers. This prevents tampering and ensures transparency, making it the foundation of all cryptocurrencies.
        </p>

        <h2 className="text-2xl text-violet-800 font-semibold mt-8 mb-3 border-b pb-2">How to Store Cryptocurrency?</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Cryptocurrencies are stored in digital wallets. There are two main types:
        </p>
        <ul className="text-lg mb-6 list-disc pl-5">
          <li><strong>Hot Wallets:</strong> Connected to the internet, easy to access but vulnerable to hacks.</li>
          <li><strong>Cold Wallets:</strong> Offline storage (like hardware wallets) offering higher security.</li>
        </ul>

        <h2 className="text-2xl text-violet-800 font-semibold mt-8 mb-3 border-b pb-2">How to Buy Cryptocurrency?</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Buying cryptocurrency is simple. You can use exchanges like Binance, Coinbase, or Kraken to purchase crypto using traditional money (fiat). After purchasing, store your assets securely in a wallet.
        </p>

        <h2 className="text-2xl text-violet-800 font-semibold mt-8 mb-3 border-b pb-2">Risks & Considerations</h2>
        <ul className="text-lg mb-6 list-disc pl-5">
          <li><strong>Volatility:</strong> Cryptocurrency prices can fluctuate dramatically.</li>
          <li><strong>Security:</strong> Scams and hacks are common—always use secure wallets.</li>
          <li><strong>Regulation:</strong> Governments may introduce laws that impact crypto markets.</li>
        </ul>

        <h2 className="text-2xl text-violet-800 font-semibold mt-8 mb-3 border-b pb-2">Conclusion</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Cryptocurrency is revolutionizing finance by offering a decentralized, borderless, and transparent way to transact. By understanding the fundamentals, you can make informed decisions about investing and participating in this exciting digital economy.
        </p>
      </div>
    </div>
  )
}

export default About