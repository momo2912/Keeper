const server = require('./server');

const port = 5000;

server.listen(port || 8000, () => {
  console.log(`Server is running on port ${port}`)
});