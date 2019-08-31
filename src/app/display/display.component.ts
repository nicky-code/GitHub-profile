import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { GitHubService } from '../gitHub-service/git-hub.service';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from '../user';
import { Repository } from '../repository';
import { Pipe, PipeTransform } from '@angular/core';

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

  transform(value: any): number {
    const today: Date = new Date();
    const todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateDifference = Math.abs(value - todayWithNoTime);
    const secondsInDay = 86400;
    const dateDifferenceSeconds = dateDifference * 0.001;
    const dateCounter = dateDifferenceSeconds / secondsInDay;

    if (dateCounter < 1) {
      return 0;
    } else {
      return dateCounter;
    }
  }
}
