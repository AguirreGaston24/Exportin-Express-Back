import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import { googleServiceAccount } from '../config/google-service-account'; // Ajusta la ruta según tu estructura de proyecto

@Injectable()
export class GoogleSheetsService {
  private sheets;
  private spreadsheetId = '1F-iMJagBqrO3qicstWk77A5CTRnzNKV-VfpdnXcx3Xg'; // ID de tu hoja de cálculo

  constructor() {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    this.sheets = google.sheets({ version: 'v4', auth });
  }

  async appendRow(data: any[]) {
    try {
      const range = 'ExportingExpress!A:E'; // Ajusta el rango según tu hoja
      const response = await this.sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range,
        valueInputOption: 'RAW', // RAW o USER_ENTERED
        requestBody: {
          values: [data], // Los datos que deseas añadir
        },
      });

      console.log('Datos añadidos con éxito:', response.data);
    } catch (error) {
      console.error('Error al añadir datos a Google Sheets:', error.message);
      throw error;
    }
  }
}
