import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center; margin-top: 50px; font-family: Arial, sans-serif;">
      <h1>Staff Control - Lab 5</h1>
      <p>Статус сервера: <span [style.color]="serverStatus === 'ok' ? 'green' : 'red'">{{ serverStatus }}</span></p>
      
      <h3>Доступные локации (из БД):</h3>
      <ul style="list-style-type: none; padding: 0;">
        <li *ngFor="let loc of locations | keyvalue" style="margin: 10px; padding: 10px; border: 1px solid #ccc; border-radius: 5px; display: inline-block;">
          ID: {{ loc.key }} - {{ loc.value }}
        </li>
      </ul>
      <p *ngIf="!locations">Загрузка данных...</p>
    </div>
  `
})
export class AppComponent implements OnInit {
  serverStatus = 'checking...';
  locations: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/health').subscribe(
      (res: any) => this.serverStatus = res.status,
      err => this.serverStatus = 'error'
    );

    this.http.get('/api/v1/locations').subscribe(
      res => this.locations = res,
      err => console.error('Error fetching locations', err)
    );
  }
}
