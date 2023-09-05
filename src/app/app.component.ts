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
  constructor(private bored: BoredService) {}

  ngOnInit() {
    this.generateNewIdea();
  }

  generateNewIdea() {
    this.bored.getActivity().subscribe(response => {
      this.data = response;
    });
  }

}
