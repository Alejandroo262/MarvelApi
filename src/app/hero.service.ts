import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable, of, Subscription} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class HeroService {

  //private heroesUrl = 'api/heroes';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getHeroes() {
    return this.http.get('https://gateway.marvel.com/v1/public/characters?ts=alejandro&apikey=d5e45aa61fb2a328e9f07eec1abe74ce&hash=cf2f61312244092a712fad6fa9b175ce', this.httpOptions).pipe(
      map((data:any) => {
          return data;
        }))
  }

  /**getHeroe() {
    return this.http.get('https://gateway.marvel.com/v1/public/characters?ts=alejandro&apikey=d5e45aa61fb2a328e9f07eec1abe74ce&hash=cf2f61312244092a712fad6fa9b175ce', this.httpOptions).pipe(
      map((data:any) => {
        return data;
      }))
  } **/

  /** GET hero by id. Return `undefined` when id not found */


  /** GET hero by id. Will 404 if id not found */


  /* GET heroes whose name contains search term */


  //////// Save methods //////////

  /** POST: add a new hero to the server */


  /** DELETE: delete the hero from the server */


  /** PUT: update the hero on the server */


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */


      // TODO: send the error to remote logging infrastructure

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.


  /** Log a HeroService message with the MessageService */

}
