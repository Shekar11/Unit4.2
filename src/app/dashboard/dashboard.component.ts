import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  data: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.apiService.getAllPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayerLeastBalls() {
    this.apiService.getPlayerLeastBalls().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayerHighestSixes() {
    this.apiService.getPlayerHighestSixes().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersByRuns() {
    this.apiService.getPlayersByRuns().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersByLeastRuns() {
    this.apiService.getPlayersByLeastRuns().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayerHighestMatches() {
    this.apiService.getPlayerHighestMatches().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  DeletePlayer(data: any) {
    let body = {
      _id: data,
    };
    this.apiService.deletePlayer(body).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  onOptionsSelected(value: string) {
    if (value === 'get-player-least-balls') {
      this.getPlayerLeastBalls();
    } else if (value === 'get-player-highest-sixes') {
      this.getPlayerHighestSixes();
    } else if (value === 'get-players-by-runs') {
      this.getPlayersByRuns();
    } else if (value === 'get-players-by-least-runs') {
      this.getPlayersByLeastRuns();
    } else if (value === 'get-player-highest-matches') {
      this.getPlayerHighestMatches();
    } else {
      this.getAllData();
    }
  }
  deletePlayer(id: string) {
    this.DeletePlayer(id);
  }
}
