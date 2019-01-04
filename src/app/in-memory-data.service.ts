import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      { id: 11, name: 'Mr. Nice', job: 'player', age: 6 },
      { id: 12, name: 'Narco', job: 'player', age: 16 },
      { id: 13, name: 'Bombasto', job: 'player', age: 20 },
      { id: 14, name: 'Celeritas', job: 'player', age: 11 },
      { id: 15, name: 'Magneta', job: 'player', age: 36 },
      { id: 16, name: 'RubberMan', job: 'player', age: 33 },
      { id: 17, name: 'Dynama', job: 'player', age: 21 },
      { id: 18, name: 'Dr IQ', job: 'player', age: 41 },
      { id: 19, name: 'Magma', job: 'player', age: 12 },
      { id: 20, name: 'Tornado', job: 'player', age: 22 },
      { id: 21, name: 'Tornado', job: 'player', age: 43 },
    ];
    return {employees};
  }
}
