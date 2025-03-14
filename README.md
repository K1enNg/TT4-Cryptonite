# Introduction to Cryptonite

## Project Overview

Cryptonite is a gateway to understanding the world of cryptocurrency. It provides the insights and tools needed for beginner and advanced traders alike to navigate a rapidly evolving market.
**Note:** Cryptonite is an informational platform only. It does not support cryptocurrency transactions (buying or selling).  

---

## Key Features
- **Real-Time Market Data:** Get up-to-the-minute prices, trends, and historical data for a wide range of cryptocurrencies.

  
### Real-Time Market Data  
- Live cryptocurrency prices, percentage changes, and historical data.  
- Market trends and insights to help users make informed decisions.  


### Market Insights & Analytics  
- Trading volume, market cap, and historical trends.  
- Interactive graphs and charts for visualizing market movements.  

---

## Tech Stack

| Layer         | Technology Used |
|--------------|----------------|
| **Frontend**  | React, TailwindCSS |
| **Backend**   | Node.js |
| **API**       | CoinGecko API |

---

## Structure

```
src/
├── api/
│   ├── CoinContext.jsx        # Context provider for coin data
│   └── CoinDetail.jsx         # API calls for detailed coin information
├── assets/                    # Static assets (images, icons, etc.)
├── components/
│   ├── Coin.jsx               # Main coin listing component
│   ├── CoinDetail.jsx         # Detailed view of a single coin
│   ├── Hero.jsx               # Hero section component
│   ├── Layout.jsx             # Main layout wrapper component
│   ├── Navbar.jsx             # Navigation bar component
│   ├── Service.jsx            # Services section component
├── pages/
│   ├── Homepage.jsx           # Home page
│   ├── About.jsx             # About page
│   ├── Contact.jsx           # Contact page
│   └── Service.jsx           # Services page
├── utils/                     # i18n for web translation
├── App.jsx                    # Project router 
└── main.jsx                   # Application entry point
```

## API Integration 

### **CoinGecko API**  
Cryptonite leverages the **CoinGecko API** to fetch accurate and up-to-date cryptocurrency market data, including:  
✅ Prices  
✅ Market caps  
✅ Historical trends  

---

## 🛠 Planned Features  

### 1️⃣ Core Features  
- **Real-Time Market Data**: Live prices, trends, and historical price charts.  
- **Watchlist**: Bookmark and track favorite cryptocurrencies.  
- **Market Insights & Analytics**: Trading volume, market cap, and interactive data visualization.  

### 2️⃣ UI/UX Enhancements  
- **Responsive Design**: Mobile-friendly interface with TailwindCSS.  
- **Search & Filter**: Quick cryptocurrency lookup and filtering by market trends.  

### 3️⃣ API Integration  
- **CoinGecko API**: Fetch market data, including prices, market caps, and trends.  

---

## Developers 
- **Christian Denis Marcelin**  
- **Trung Kien Nguyen**  
- **Yunxian Xu**  
- **Jhalil Danilo Roman Soria**  
- **Sarah Leventon**  


