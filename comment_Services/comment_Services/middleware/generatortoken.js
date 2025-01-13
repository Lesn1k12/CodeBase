const jwt = require('jsonwebtoken');

function generateToken() {
  const payload = { user: 'testUser' }; // Данные для токена
  const secret = process.env.JWT_SECRET || 'your_default_jwt_secret'; // Используйте секрет из .env или дефолтный

  const token = jwt.sign(payload, secret, { expiresIn: '1h' }); // Токен действует 1 час
  console.log('Generated Token:', token); // Логируем токен
}

generateToken();
