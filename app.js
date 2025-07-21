const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Simple test route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    message: 'Time2Kill Trading Backend is running!',
    timestamp: new Date().toISOString()
  });
});

// Trading status route
app.get('/api/trading/status', (req, res) => {
  res.json({
    status: 'active',
    trades: [
      { symbol: 'AAPL', shares: 27, price: 182.39, action: 'BUY' },
      { symbol: 'MSFT', shares: 15, price: 342.75, action: 'BUY' },
      { symbol: 'TSLA', shares: 8, price: 248.50, action: 'BUY' }
    ],
    portfolio_value: 45789.32
  });
});

const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Time2Kill Trading Backend running on port ${port}`);
});