module.exports = {
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0', 
    shutdownTimeout: 10000, 
    trustProxy: true 
  },

  cors: {
    origin: [
      'https://wtm-booklistapi-production.up.railway.app',
      'http://localhost:3000' 
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400 
  },

  // Rate Limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, 
    max: 100, 
    message: 'Too many requests, please try later'
  },

  // Security Headers
  security: {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"]
      }
    },
    hsts: {
      maxAge: 63072000 // 2 years
    }
  },

  // In-Memory Data Store Limits
  memoryStore: {
    maxItems: 1000, 
    cleanupInterval: '1h' 
  },

  // Logging
  logging: {
    format: 'combined', 
    level: 'info', 
    console: {
      timestamp: true 
    }
  },

  // Monitoring Endpoint
  healthCheck: {
    path: '/health',
    interval: 30000 
  }
};