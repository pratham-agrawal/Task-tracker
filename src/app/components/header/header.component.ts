import { Component, OnInit } from '@angular/core';
import {ToggleService} from '../../services/toggle.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Pratham's Task Tracker";
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private toggleService: ToggleService) {
    this.subscription = this.toggleService.onToggle().subscribe( (bool : boolean) => (this.showAddTask = bool) );
   }

  ngOnInit(): void {
  }

  ToggleAddTask() {
    this.toggleService.toggleAddTask();
  }
}
