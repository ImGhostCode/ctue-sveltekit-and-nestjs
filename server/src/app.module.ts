import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule]
})
export class AppModule {
  static port: number
  constructor(configService: ConfigService) {
    AppModule.port = configService.get('PORT')
  }
}