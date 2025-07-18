import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { SuggestionDto } from './dto/suggestion.dto';
@Injectable()
export class SuggestionService {
  constructor(private readonly databaseService: DatabaseService) {}

  sendSuggestion(suggestionDto: SuggestionDto) {
    console.log('Suggestion received:', suggestionDto);
    return {};
  }
}
