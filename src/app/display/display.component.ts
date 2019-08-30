import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { GitHubService } from '../gitHub-service/git-hub.service';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from '../user';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  displayUser:User;
  constructor(private route:ActivatedRoute, private service:GitHubService) { }

  ngOnInit() {
    let userData = this.route.snapshot.paramMap.get('name');
    this.service.myUserRequest(userData);
    this.displayUser= this.service.users;
    console.log(this.displayUser);
    
  }

}
