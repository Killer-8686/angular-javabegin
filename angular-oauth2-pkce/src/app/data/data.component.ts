import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import jwt_decode from "jwt-decode";


// отображение бизнес данных приложения
// на эту страницу попадаем уже после успешной авторизации в KeyCloak (или любом другом auth server)
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  ngOnInit(): void {
  }

}



