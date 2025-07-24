import { Body, Controller, Post } from '@nestjs/common';
import { SuggestionService } from './suggestion.service';
import { SuggestionDto } from './dto/suggestion.dto';

@Controller('suggestion')
export class SuggestionController {
  constructor(private readonly suggestionService: SuggestionService) {}

  @Post('send')
  sendSuggestion(@Body() suggestionDto: SuggestionDto) {
    return this.suggestionService.saveSuggestion(suggestionDto);
  }
}
