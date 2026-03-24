import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-main-site',
  imports: [],
  templateUrl: './main-site.html',
  styleUrl: './main-site.css',
})
export class MainSite {
  protected readonly isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
