import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UsersModule, PostsModule, DatabaseModule, ProductsModule],
})
export class AppModule {}
