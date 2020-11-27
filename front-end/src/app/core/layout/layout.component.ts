import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  isDark = true;

  constructor() {}

  ngOnInit(): void {}

  toggleTheme(): void {
    this.isDark = !this.isDark;
  }
}
