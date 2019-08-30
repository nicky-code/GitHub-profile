import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { GitHubService } from '../gitHub-service/git-hub.service';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from '../user';
import { Repository } from '../repository';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  displayUser: User;
  displayRepo: Repository[];

  constructor(private route: ActivatedRoute, private service: GitHubService) { }

  ngOnInit() {
    const userData = this.route.snapshot.paramMap.get('name');
    this.service.myUserRequest(userData);
    this.service.myRepoRequest(userData);
    this.displayUser = this.service.users;
    this.displayRepo = this.service.repositories;
    // console.log(this.displayUser);
  }

}
