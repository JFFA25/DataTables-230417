import { Component } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataTablesModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tables-230417';
}