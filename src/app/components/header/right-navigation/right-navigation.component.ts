import { Component, OnInit } from '@angular/core';
import { faGift, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-right-navigation',
  templateUrl: './right-navigation.component.html',
  styleUrls: ['./right-navigation.component.css']
})
export class RightNavigationComponent implements OnInit {
  giftIcon = faGift;
  bellIcon = faBell;

  constructor() { }

  ngOnInit(): void {
  }

}
