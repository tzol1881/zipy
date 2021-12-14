import { Component, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { DataService } from '../../services/data.service';
export interface Column {
  filmname: string,
  filmmaker: string,
  category: string,
  genre: string,
  length: number,
  time: string
}
@Component({
  selector: 'app-film-submissions',
  templateUrl: './film-submissions.component.html',
  styleUrls: ['./film-submissions.component.css']
})
export class FilmSubmissionsComponent {
  filterText: string = '';
  searchText: string = '';
  column = new FormControl();
  sortBy = 'time';
  modifyFilterText: any = 'Submission Year';
  submissionDates: any = ['All', 2017, 2018, 2019, 2020, 2021];
  columnFilter = new FormControl();
  selectAll = false;
  columnListOrg = [
    {
      columnName: 'checkbox',
      checked: false
    },
    {
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
    }];
  columnList = [...this.columnListOrg];
  columns = new BehaviorSubject(this.columnList.slice());
  @ViewChild('alert', { static: true }) alert: ElementRef;

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.columnFilter.valueChanges.pipe().subscribe(() => {
      let filterText = this.columnFilter.value;
      if (filterText === '') {
        this.columns.next(this.columnList.slice())
        return
      }
      let columnList = this.columnList.slice().filter(col => col.columnName.includes(filterText));
      this.columns.next(columnList);
    })
    this.sortColumn('time');
  }

  columnCheck(columnName: any) {
    let column = this.columnList.find(col => col.columnName === columnName);
    if (column) {
      column.checked = !column.checked;
      let checkedCount = this.columnList.filter(column => column.checked).length == this.columnList.length;
      this.selectAll = checkedCount;
      this.dataService.mainHeadElements.next(this.columnList);
    }
  }

  checkedAll() {
    this.selectAll = !this.selectAll;
    this.columnList.map(col => col.checked = this.selectAll);
  }

  filterChange() {
    this.columnList = this.columnListOrg.slice().filter(col => col.columnName.includes(this.searchText));
  }

  get selected(): string {
    let selectedColumnText = this.columnList.filter(i => i.checked).map(i => i.columnName).join(', ')
    return selectedColumnText !== '' ? selectedColumnText : 'Edit Columns';
  }

  sortColumn(columnName: any) {
    this.sortBy = columnName;
    let filmList = this.dataService.mainFilmList.value.sort((a: any, b: any) => {
      let keyA = a[columnName];
      let keyB = b[columnName];
      if (columnName == 'time') {
        keyA = new Date(a[columnName]);
        keyB = new Date(b[columnName]);
        // let res = keyA - keyB
        return keyA - keyB;
      }
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    })
    this.dataService.mainFilmList.next(filmList);
  }

  modifyFilter() {
    if (this.modifyFilterText == 'All') {
      this.dataService.mainFilmList.next([...this.dataService.originalFilmList]);
    } else {
      let filmList = [...this.dataService.originalFilmList].filter((a: any) => {
        let keyA = new Date(a.time);
        return keyA.getFullYear() === this.modifyFilterText;
      })
      this.dataService.mainFilmList.next(filmList);
    }
  }

  closeAlert() {
    this.alert.nativeElement.style.display = 'none';
  }
}

