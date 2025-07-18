import {
  MinLength,
  IsString,
  IsNotEmpty,
  IsEmail,
  MaxLength,
} from 'class-validator';

export class SuggestionDto {
  @IsString()
  @IsNotEmpty()
  dsTitle: string;

  @IsString()
  @MinLength(5)
  @MaxLength(500)
  description: string;

  @IsEmail()
  @IsNotEmpty()
  dsEmail: string;
}
