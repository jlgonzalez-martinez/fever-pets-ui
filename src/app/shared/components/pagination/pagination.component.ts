import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit {

  @Output() pageEvent = new EventEmitter<number>();
  @Input() page: number = 1;
  @Input() disablePrev: boolean = true;
  @Input() disableNext: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  changePage(next: boolean) {
    let newPage = next ? this.page + 1: this.page -1;
    this.pageEvent.emit(newPage)
  }

}
