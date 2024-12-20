import { Body, Controller, Post } from '@nestjs/common';
import { GoogleSheetsService } from './google-sheets.service';

@Controller('google-sheets')
export class GoogleSheetsController {
  constructor(private readonly googleSheetsService: GoogleSheetsService) {}

  @Post()
  async saveToSheet(@Body() data: any) {
    const { name, email, phone, country, countryCode } = data;

    if (!name || !email || !phone) {
      return { success: false, message: 'Datos incompletos' };
    }

    await this.googleSheetsService.appendRow([
      name,
      email,
      `${countryCode} ${phone}`,
      country,
      new Date().toISOString(),
    ]);

    return { success: true, message: 'Datos guardados exitosamente en Google Sheets' };
  }
}
