import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Icecream} from "../model/icecream";

@Injectable({providedIn: 'root'})
export class IcecreamService {

  private baseUrl = 'http://localhost:8080/icecream'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(   private http: HttpClient) {}

  getIcecreams(): Observable<Icecream[]> {
    return this.http.get<Icecream[]>(this.baseUrl).pipe();
  }

  saveIcecream(icecream: Icecream): Observable<any> {
    return this.http.put(this.baseUrl, icecream, this.httpOptions).pipe();
  }
}
