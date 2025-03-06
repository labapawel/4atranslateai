import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Translator' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Translator');
  });

  it('Sprawdzenie treści w label-ce nad textarea', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#labelTranslationInput')?.textContent).toContain('Wklej tekst do przetłumaczenia');
  });

  it('Sprawdzenie czy wyświetla się textaera', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#translationInput')).toBeTruthy();
  });

  it('Sprawdzenie treści w label-ce na inputem', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#labelLanguageInput')?.textContent).toContain('Wprowadź język');
  });

  it('Sprawdzenie treści  placeholder w input jest OK', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLInputElement;
    expect(compiled.querySelector('#languageInput')?.getAttribute('placeholder')).toContain('np. en, pl');
  });

  it('Sprawdzenie czy wyświetla się textaera', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#languageInput')).toBeTruthy();
  });


});
