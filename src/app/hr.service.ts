import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  private employeeUrl = 'api/employees';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET employee from the server */
  getEmployees (): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl)
      .pipe(
        catchError(this.handleError('getEmployeees', []))
      );
  }

  getEmployeeNo404<Data>(id: number): Observable<Employee> {
    const url = `${this.employeeUrl}/?id=${id}`;
    return this.http.get<Employee[]>(url)
      .pipe(
        map(employee => employee[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
        }),
        catchError(this.handleError<Employee>(`getEmployee id=${id}`))
      );
  }

  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeeUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(
      catchError(this.handleError<Employee>(`getEmployee id=${id}`))
    );
  }

  /* GET employee whose name contains search term */
  searchEmployees(term: string): Observable<Employee[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Employee[]>(`${this.employeeUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Employee[]>('searchEmployees', []))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
