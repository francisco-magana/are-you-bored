import { Component, OnInit } from '@angular/core';
import { BoredService } from "./services/bored.service";
import { activity } from "../types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: activity | null = null;
  timer: number = 0;
  able_to_realod: boolean = true;
  seconds: number = 0;
  RELOAD_TIME_IN_SECONDS: number = 5;
  constructor(private bored: BoredService) {}

  ngOnInit() {
    this.generateNewIdea();
  }

  generateNewIdea(idea_type?: string) {
    if (!this.able_to_realod) return;
    this.ableToReloadTimer();
    this.bored.getActivity(idea_type).subscribe(response => {
      this.data = response;
      this.able_to_realod = false;
    });
  }

  ableToReloadTimer() {
    setTimeout(() => {
      this.seconds += 1;
      if (this.seconds <= this.RELOAD_TIME_IN_SECONDS) {
        this.ableToReloadTimer();
      } else {
        this.able_to_realod = true;
        this.seconds = 0;
      }
    }, 1000);
  }

}
