import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Repository } from '../repository';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  users: User;
  repositories: Repository[];

  constructor(private http: HttpClient) {
this.users = new User('', '', 0);
this.repositories = [];
  }

  myUserRequest(userName) {
    interface ApiResponse {
      login: string;
      avatar_url: any;
      public_repos: number;
    }
    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>
      ('https://api.github.com/users/' + userName + 'access_token=' + environment.apiKey).toPromise().then(response => {

        this.users.login = response.login;
        this.users.avatar_url = response.avatar_url;
        this.users.public_repos = response.public_repos;
         // tslint:disable-next-line: align
         console.log(this.users);
        resolve(userName);
    },
    error => {
      this.users.login = 'sorry,sorry,sorry doesn`t solve anything';

      reject(error);
    });
  });
    return promise;

  }





}
