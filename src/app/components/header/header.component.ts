import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText: string = '';
  @Input() isHide: boolean = true;
  @Output() changeSearchText = new EventEmitter();
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }

  filterTable() {
    this.changeSearchText.emit(this.searchText)
  }

  navigateBack() {
    this.router.navigate(['']);
  }

  showSideNav() {
    this.dataService.showSideNav.next(true);
  }
}
