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
  @MinLength(5)
  @MaxLength(50)
  dsTitle: string;

  @IsString()
  @MinLength(5)
  @MaxLength(500)
  dsDescription: string;

  @IsEmail()
  @IsNotEmpty()
  dsEmail: string;
}
