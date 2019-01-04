import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      { id: 11, name: 'Long Shorter', job: 'player', age: 6 },
      { id: 12, name: 'Loserwise', job: 'gamer', age: 16 },
      { id: 13, name: 'Bombasto', job: 'dancer', age: 20 },
      { id: 14, name: 'Celeritas', job: 'tester', age: 11 },
      { id: 15, name: 'Magneta', job: 'drinker', age: 36 },
      { id: 16, name: 'RubberMan', job: 'cat fighter', age: 33 },
      { id: 17, name: 'Dynama', job: 'acctress', age: 21 },
      { id: 18, name: 'Dr IQ', job: 'runner', age: 41 },
      { id: 19, name: 'Virginista', job: 'hooker', age: 12 },
      { id: 20, name: 'Tornado', job: 'prayer', age: 22 },
      { id: 21, name: 'Draxer', job: 'bummer', age: 43 },
    ];
    return {employees};
  }
}
