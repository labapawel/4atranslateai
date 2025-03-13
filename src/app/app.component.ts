import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AIService } from './ai.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Translator';
  tresc = '';
  jezyk = 'PL';
  wynik = '';
  constructor(private ai: AIService){
    
  }
  async wyslij(){
    let prompt = `Będziesz tłumaczyć tekst który znajduje się poniżej 
    naglowka tresc na język którego masz skrót tutaj ${this.jezyk},
    
    ##tresc##
    ${this.tresc}
       
    `;

    let res = await this.ai.generateText(prompt);
    this.wynik = res;
    console.log(res);
  }
}
