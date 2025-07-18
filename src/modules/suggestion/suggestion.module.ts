import { Module } from '@nestjs/common';
import { SuggestionController } from './suggestion.controller';
import { SuggestionService } from './suggestion.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [SuggestionController],
  providers: [SuggestionService, DatabaseService],
  exports: [SuggestionService],
})
export class SuggestionModule {}
