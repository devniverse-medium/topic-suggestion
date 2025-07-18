import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuggestionModule } from './modules/suggestion/suggestion.module';

@Module({
  imports: [SuggestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
