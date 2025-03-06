import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class AIService {

  private genAI = new GoogleGenerativeAI(environment.gemini_api);
  private model = this.genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  private config = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  }

  public async generateText(prompt: string) {
    
    let chatSession = this.model.startChat({
 
    history: [
    ],
  });
  }

  constructor() { 
    console.log('AI Service created');
    console.log(environment.gemini_api);
    

  }
}
