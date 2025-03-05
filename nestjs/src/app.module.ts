import { Account } from './accounts/entities/account.entity';
import { AccountsModule } from './accounts/accounts.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { Order } from './orders/entities/order.entity';
import { OrdersModule } from './orders/orders.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';

//ES7 Decorators - Documentar ou estender
@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: process.env.DB_CONNECTION as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadModels: true,
      models: [Order, Account],
      sync: {
        alter: true,
        //force: true
      },
    }),
    OrdersModule,
    // SequelizeModule.forRoot({
    //   dialect: 'sqlite',
    //   host: join(__dirname, 'database.sqlite'),
    //   autoLoadModels: true,
    //   models: [Order, Account],
    //   sync: {
    //     alter: true,
    //     //force: true
    //   },
    // }),
    AccountsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
