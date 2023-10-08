import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, AuthModule]
})
export class AppModule {
  static port: number
  constructor(configService: ConfigService) {
    AppModule.port = configService.get('PORT')
  }
}