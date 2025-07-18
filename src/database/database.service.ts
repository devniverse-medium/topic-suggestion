import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class DatabaseService {
  async save(collectionName: string, data: any) {}
}
