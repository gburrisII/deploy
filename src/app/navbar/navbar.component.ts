// navbar.component.ts
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  /* styleUrl:  */
  styleUrls: [
    './navbar.mobile.component.css',
    './navbar.component.css']
})

export class NavbarComponent implements OnInit {
  @Input() init: boolean | undefined;
  @Output() opened = new EventEmitter<any>();

  active = false;

  ngOnInit() {
    this.active = this.init || false;
  }

  onBurgerClicked() {
    this.active = !this.active;
    this.opened.emit();
  }
}