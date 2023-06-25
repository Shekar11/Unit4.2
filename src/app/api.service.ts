import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public addPlayer(body: any) {
    return this.http.post('http://localhost:3000/add-player', body);
  }
  public updatePlayer(body: any) {
    return this.http.post('http://localhost:3000/update-player', body);
  }
  public findPlayer(body: any) {
    return this.http.post('http://localhost:3000/find-player', body);
  }
  public deletePlayer(body: any) {
    return this.http.post('http://localhost:3000/delete-player', body);
  }
  public getAllPlayers() {
    return this.http.get('http://localhost:3000/find-all-players');
  }
  public getPlayerLeastBalls() {
    return this.http.get('http://localhost:3000/get-player-least-balls');
  }
  public getPlayerHighestSixes() {
    return this.http.get('http://localhost:3000/get-player-highest-sixes');
  }
  public getPlayersByRuns() {
    return this.http.get('http://localhost:3000/get-players-by-runs');
  }
  public getPlayersByLeastRuns() {
    return this.http.get('http://localhost:3000/get-players-by-least-runs');
  }
  public getPlayerHighestMatches() {
    return this.http.get('http://localhost:3000/get-players-highest');
  }
}
