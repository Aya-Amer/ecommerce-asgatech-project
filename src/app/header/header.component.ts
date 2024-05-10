import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // onSelect(feature: string) {}
  onMenuClicked() {
    debugger;
    let elem = document.getElementById('navbarNavDropdown');
    let hasClass = elem.classList.contains('show');
    console.log(hasClass);
  }
}
