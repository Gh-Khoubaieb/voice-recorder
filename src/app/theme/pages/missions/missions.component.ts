import { Component, OnInit } from '@angular/core';
import { faFile, faPen, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent implements OnInit {
  //faCoffee = faCoffee;
  pen=faPen;
  user=faUser;
  pages=faFile;
  //home=faHome

  constructor() { }

  ngOnInit(): void {
  }

}
