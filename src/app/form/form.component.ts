import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nicole: string;
  aline(ok) {
    this.nicole = ok;
    console.log(this.nicole);
    this.router.navigate(['/display',this.nicole])
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
