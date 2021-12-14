import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input('filterText') filterText: string = '';
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective
  editField: string = '';
  searchText: string = '';
  previous: any = [];
  filmList: any = [];
  mainHeadElements: any = [];
  mediaHeadElements: any = [];
  headElements: Array<any> = [];
  mainFilmList: Array<any> = [];
  x: any;
  selectAllFilmsCheck: boolean = false;
  constructor(private cdRef: ChangeDetectorRef, private router: Router, private dataService: DataService) {
  }

  ngOnInit() {
    this.mdbTable.setDataSource(this.filmList);
    this.filmList = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
    this.dataService.mainHeadElements.subscribe(result => {
      this.mainHeadElements = result;
      this.headElements = this.mainHeadElements
    });
    this.mediaHeadElements = this.dataService.mediaHeadElements;
    this.dataService.mainFilmList.subscribe(res => {
      this.mainFilmList = res;
      this.filmList = [...this.mainFilmList];
      this.mdbTable.setDataSource(this.filmList);
      this.filmList = this.mdbTable.getDataSource();
      this.previous = this.mdbTable.getDataSource();
    });
    this.x = window.matchMedia("(min-width: 700px)")
    this.myFunction(this.x) // Call listener function at run time
    this.x.addListener(this.myFunction) // Attach listener function on state changes

  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.mainFilmList[id][property] = editField;
    this.filmList = [...this.mainFilmList];
    this.mdbTable.setDataSource(this.filmList);
    this.filmList = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  getButtonClass(text: string) {
    switch (text) {
      case 'SHORT':
      case 'ADVENTURE':
      case 'SPORTS':
        return '#00BFE1';
        break;

      case 'SCI-FI':
      case 'ADVERT':
        return '#A55ED2';
        break;

      case 'DOCU':
        return '#009FF9';
        break;

      case 'DRAMA':
        return '#F1A95B';
        break;

      case 'TRAVEL':
      case 'EVENT':
      case 'CORPORATE':
        return '#786BE6';
        break;

      case 'BIOPIC':
        return '#41BD75';
        break;

      case 'CRIME':
        return '#EC5E75';
        break;

      default:
        return '#ffffff';
        break;
    }
  }

  filterTable(searchText: any) {
    searchText = searchText.replace(/\s/g, '');
    if (searchText.length) {
      let filmList = [...this.mainFilmList].filter(el => el.filmname.replace(/\s/g, '').includes(searchText) || el.filmmaker.replace(/\s/g, '').includes(searchText));
      this.filmList = filmList;
    } else {
      this.filmList = [...this.mainFilmList];
    }
    this.mdbTable.setDataSource(this.filmList);
    this.filmList = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  navigateToDetails(head: any, filmDetails: any) {
    if (head === 'filmname') {
      this.dataService.selectedFilm = filmDetails
      this.router.navigate(['/film-details']);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.filterTable(this.filterText);
    }
  }

  myFunction(x: any) {
    if (x.matches) {
      this.headElements = this.mainHeadElements;
    } else {
      this.headElements = this.mediaHeadElements;
    }
  }

  selectAllFilms() {
    this.selectAllFilmsCheck = !this.selectAllFilmsCheck
    let filmList = [...this.mainFilmList];
    filmList.forEach(film => film.selected = this.selectAllFilmsCheck);
    this.filmList = filmList;
    this.mdbTable.setDataSource(this.filmList);
    this.filmList = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  selectFilm(film: any) {
    let filmIndex = [...this.mainFilmList].findIndex(el => el.id === film.id);
    let filmList = [...this.mainFilmList];
    filmList[filmIndex].selected = !filmList[filmIndex].selected;
    this.filmList = filmList;
    this.mdbTable.setDataSource(this.filmList);
    this.filmList = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
    this.filmList.filter((film: any) => film.selected).length === this.filmList.length ? this.selectAllFilmsCheck = true : this.selectAllFilmsCheck = false
  }
}
