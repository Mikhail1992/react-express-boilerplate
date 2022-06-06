import dotenv from 'dotenv';
import App from './app';

dotenv.config();
const bootstrap = () => {
  const app = new App(3001);
  app.init();
};

bootstrap();
