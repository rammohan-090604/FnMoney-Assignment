const app = require('./api/server');

const HOSt = 'localhost';
const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));