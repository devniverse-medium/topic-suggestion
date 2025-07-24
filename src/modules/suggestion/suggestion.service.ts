import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SuggestionDto } from './dto/suggestion.dto';
import { Repository } from 'typeorm';
import { SuggestionEntity } from './entities/suggestion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { title } from 'process';
@Injectable()
export class SuggestionService {
  constructor(
    @InjectRepository(SuggestionEntity)
    private readonly suggestionRepository: Repository<SuggestionEntity>,
  ) {}

  async saveSuggestion(suggestionDto: SuggestionDto) {
    const register = await this.suggestionRepository.save(suggestionDto);

    if (!register) {
      throw new InternalServerErrorException('Failed to save suggestion');
    }

    return {
      message: 'Suggestion saved successfully',
      suggestion: {
        title: register.dsTitle,
        createdAt: register.createdAt,
      },
    };
  }
}
