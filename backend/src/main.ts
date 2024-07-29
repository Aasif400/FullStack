const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./app.module');
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for all routes
  app.use(cors());

  await app.listen(4000); // Listen on port 4000
}
bootstrap();
