import { Injectable } from '@nestjs/common';
import { SuggestionDto } from './dto/suggestion.dto';
@Injectable()
export class SuggestionService {
  saveSuggestion(suggestionDto: SuggestionDto) {
    //aqui eu tenho que salvar no banco de dados
    return {};
  }
}
