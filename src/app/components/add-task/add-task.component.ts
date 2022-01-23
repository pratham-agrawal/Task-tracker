import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task'
import {ToggleService} from '../../services/toggle.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private toggleService : ToggleService) { 
    this.subscription = this.toggleService.onToggle().subscribe( (bool : boolean) => (this.showAddTask = bool) );
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert ("Task name left empty!");
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
    this.toggleService.toggleAddTask();
  }

}
