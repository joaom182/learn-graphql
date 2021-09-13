import app from './app';
const port = process.env.PORT || 5002;

app
  .listen({ port })
  .then(() => console.log(`Server is running on port :${port}`));
