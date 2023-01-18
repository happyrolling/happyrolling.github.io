import { environment } from '../../../../environments/environment';
import { SeoService } from '../../../services/seo/seo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  name = environment.application.name;

  constructor(private seoService: SeoService) {
    const content =
      'کلاس‌های رایگان آلمانی. از صفر تا صد آلمانی رو با ما یاد بگیر. تمامی کلاس‌ها رایگان. از A1 تاB2. همراه حل تمرین و مثال عملی ';
    const title = 'آموزش رایگان آلمانی استاد دارائی - A1 - B2';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);
  }
}
