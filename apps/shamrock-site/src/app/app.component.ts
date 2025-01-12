import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent, FooterComponent } from '@shamrock/ui';

@Component({
    imports: [RouterModule, HeaderComponent, FooterComponent],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shamrock-site';
}
