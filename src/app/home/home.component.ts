import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Emitters} from '../emitters/emitters';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = '';
  name = "GetContext";
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  goToPage(pagename:string)
  {
    this.router.navigate([`${pagename}`])
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        this.message = `Hi ${res.name}`;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message = 'You are not logged in';
        Emitters.authEmitter.emit(false);
      }
    );
  }



}