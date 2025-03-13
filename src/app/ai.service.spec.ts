import { TestBed } from '@angular/core/testing';

import { AIService } from './ai.service';

describe('AIService', () => {
  let service: AIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Sprawdzenie działania ai, zamiana Witaj świecie na Hello word',async () => {
    let prompt = `Będziesz tłumaczyć tekst który znajduje się poniżej 
    naglowka tresc na język którego masz skrót tutaj EN,
    
    ##tresc##
    Witaj świecie
    `
    let res = await service.generateText(prompt);

    expect(res).toContain('Hello world');

  });

});
