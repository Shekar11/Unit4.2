import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  data: any = [];
  constructor(private routes: Router, private apiService: ApiService) {}

  ngOnInit(): void {}

  registerPlayer(
    Name: string,
    Runs: any,
    Balls: any,
    Matches: any,
    Sixes: any
  ) {
    this.apiService
      .addPlayer({
        Name: Name,
        Runs: Runs,
        Balls: Balls,
        Matches: Matches,
        Sixes: Sixes,
      })
      .subscribe((response: any) => {
        this.data = response?.response;
        console.log('registerPlayer', this.data);
      });
    this.routes.navigate(['/dashboard']);
  }
  Register(Name: string, Runs: any, Balls: any, Matches: any, Sixes: any) {
    this.registerPlayer(Name, Runs, Balls, Matches, Sixes);
  }
}
