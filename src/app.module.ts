import { Module } from '@nestjs/common';
import { GoogleSheetsModule } from './google-sheets/google-sheets.module';

@Module({
  imports: [GoogleSheetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
