import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Icecream} from "../model/icecream";

/**
 * Service to fetch and save icecreams.
 */
@Injectable({providedIn: 'root'})
export class IcecreamService {

  private baseUrl = 'http://localhost:8080/icecream'

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  /**
   * Get all icecreams from backend.
   */
  getIcecreams(): Observable<Icecream[]> {
    return this.http.get<Icecream[]>(this.baseUrl).pipe();
  }

  /**
   * Save new icecream to backend.
   * @param icecream icecream to save.
   */
  saveIcecream(icecream: Icecream): Observable<any> {
    return this.http.put(this.baseUrl, icecream, this.httpOptions).pipe();
  }

  /**
   * Get icecream by id.
   * @param id if of icecream to get.
   */
  getIcecream(id: string): Observable<Icecream> {
    return this.http.get<Icecream>(this.baseUrl + "/" + id).pipe();
  }

  /**
   * Get category name as text.
   * @param category category of icecream.
   */
  getCategoryName(category: string | undefined) {
    switch (category) {
      case 'CREAM': {
        return 'Sahne-Eis'
      }
      case 'FRUIT': {
        return 'Frucht-Eis'
      }
      case 'WATER': {
        return 'Wasser-Eis'
      }
      default:
        return ''
    }
  }
}
