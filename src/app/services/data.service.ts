import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  mainHeadElements = new BehaviorSubject([{
    columnName: 'checkbox',
    checked: false
  }, {
    columnName: 'filmname',
    checked: false
  }, {
    columnName: 'filmmaker',
    checked: true
  }, {
    columnName: 'category',
    checked: false
  }, {
    columnName: 'genre',
    checked: false
  }, {
    columnName: 'length',
    checked: true
  }, {
    columnName: 'time',
    checked: false
  }]);

  originalFilmList = [
    {
      id: 1,
      filmname: 'The Countdown',
      filmmaker: 'M S N Karthik',
      category: 'SHORT',
      genre: 'SCI-FI',
      length: 9,
      time: '2018-01-17T17:00:00.000Z',
      selected: false
    },
    {
      id: 2,
      filmname: 'Everything Is Fine',
      filmmaker: 'Timothy Thomson',
      category: 'DOCU',
      genre: 'DRAMA',
      length: 31,
      time: '2020-01-01T17:11:00.000Z',
      selected: false
    },
    {
      id: 3,
      filmname: '800 Soldiers',
      filmmaker: 'Alexander Neal',
      category: 'TRAVEL',
      genre: 'ADVENTURE',
      length: 10,
      time: '2017-01-18T15:10:00.000Z',
      selected: false
    },
    {
      id: 4,
      filmname: 'Apple iPad Pro',
      filmmaker: 'Bertha Dixon',
      category: 'ADVERT',
      genre: 'EVENT',
      length: 9,
      time: '2021-04-16T18:00:00.000Z',
      selected: false
    },
    {
      id: 5,
      filmname: 'Bodh Gaya',
      filmmaker: 'M S N Karthik',
      category: 'DOCU',
      genre: 'DRAMA',
      length: 21,
      time: '2019-05-13T16:00:00.000Z',
      selected: false
    },
    {
      id: 6,
      filmname: 'Happyness',
      filmmaker: 'Minerva Hammond',
      category: 'SHORT',
      genre: 'CRIME',
      length: 16,
      time: '2018-01-14T14:00:00.000Z',
      selected: false
    },
    {
      id: 7,
      filmname: 'The Secret',
      filmmaker: 'Calvin Simmons',
      category: 'DOCU',
      genre: 'DRAMA',
      length: 5,
      time: '2019-01-17T19:00:00.000Z',
      selected: false
    },
    {
      id: 8,
      filmname: 'My Greate Escape',
      filmmaker: 'M S N Karthik',
      category: 'TRAVEL',
      genre: 'BIOPIC',
      length: 1,
      time: '2020-05-16T18:00:00.000Z',
      selected: false
    },
    {
      id: 9,
      filmname: 'Google Search',
      filmmaker: 'Rachel Allison',
      category: 'ADVERT',
      genre: 'CORPORATE',
      length: 4,
      time: '2021-03-14T12:00:00.000Z',
      selected: false
    },
    {
      id: 10,
      filmname: 'The Last Fall',
      filmmaker: 'Eula Chandler',
      category: 'DOCU',
      genre: 'CRIME',
      length: 19,
      time: '2019-05-16T18:00:00.000Z',
      selected: false
    },
    {
      id: 11,
      filmname: 'The Dilemma',
      filmmaker: 'Gabriel Christensen',
      category: 'DOCU',
      genre: 'SPORTS',
      length: 8,
      time: '2018-01-17T19:00:00.000Z',
      selected: false
    },
    {
      id: 12,
      filmname: 'My Greate Escape',
      filmmaker: 'M S N Karthik',
      category: 'TRAVEL',
      genre: 'BIOPIC',
      length: 1,
      time: '2019-01-14T18:00:00.000Z',
      selected: false
    },
    {
      id: 13,
      filmname: 'Google Search',
      filmmaker: 'Rachel Allison',
      category: 'ADVERT',
      genre: 'CORPORATE',
      length: 4,
      time: '2020-01-17T19:00:00.000Z',
      selected: false
    },
    {
      id: 14,
      filmname: 'The Last Fall',
      filmmaker: 'Eula Chandler',
      category: 'DOCU',
      genre: 'CRIME',
      length: 19,
      time: '2019-01-17T17:00:00.000Z',
      selected: false
    },
    {
      id: 15,
      filmname: 'The Dilemma',
      filmmaker: 'Gabriel Christensen',
      category: 'DOCU',
      genre: 'SPORTS',
      length: 8,
      time: '2021-01-17T17:00:00.000Z',
      selected: false
    },
    {
      id: 16,
      filmname: 'The Last Fall',
      filmmaker: 'Gabriel Christensen',
      category: 'DOCU',
      genre: 'SPORTS',
      length: 8,
      time: '2017-01-17T17:00:00.000Z',
      selected: false
    },
    {
      id: 17,
      filmname: 'The Dilemma',
      filmmaker: 'Gabriel Christensen',
      category: 'DOCU',
      genre: 'SPORTS',
      length: 8,
      time: '2018-01-17T17:00:00.000Z',
      selected: false
    },
    {
      id: 18,
      filmname: 'Apple iPad Pro',
      filmmaker: 'Gabriel Christensen',
      category: 'DOCU',
      genre: 'SPORTS',
      length: 8,
      time: '2019-01-17T17:00:00.000Z',
      selected: false
    },
    {
      id: 19,
      filmname: 'The Dilemma',
      filmmaker: 'Gabriel Christensen',
      category: 'DOCU',
      genre: 'SPORTS',
      length: 8,
      time: '2021-01-17T17:00:00.000Z',
      selected: false
    },
    {
      id: 20,
      filmname: 'Apple iPad Pro',
      filmmaker: 'Gabriel Christensen',
      category: 'DOCU',
      genre: 'SPORTS',
      length: 8,
      time: '2020-01-17T17:00:00.000Z',
      selected: false
    }
  ]
  mainFilmList = new BehaviorSubject([...this.originalFilmList]);
  selectedFilm = this.originalFilmList[0];

  mediaHeadElements: Array<any> = [];
  showSideNav: Subject<boolean> = new Subject();
  constructor() {
    this.mediaHeadElements = [{
      columnName: 'filmname',
      checked: false
    }, {
      columnName: 'category',
      checked: true
    }];
  }
}
