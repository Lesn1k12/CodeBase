const jwt = require('jsonwebtoken');

function generateToken() {
  const payload = { user: 'testUser' }; 
  const secret = process.env.JWT_SECRET || 'nYSvA9hsWvSZT/AOMcmiNze/YGtkwEFUMfCbos0LTgM='; 

  const token = jwt.sign(payload, secret, { expiresIn: '1h' }); 
  console.log('Generated Token:', token); 
}

generateToken();
