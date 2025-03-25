import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    // Set included languages
    this.translate.addLangs(['en', 'de']);
    const browserLang = navigator.languages
      ? navigator.languages[0].split('-')[0]
      : navigator.language.split('-')[0];

    // Get the current browser language, if included set it
    const defaultLang = this.translate.getLangs().includes(browserLang)
      ? browserLang
      : 'en';

    // Set the default and current language
    this.translate.setDefaultLang(defaultLang);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
