import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'search-box-component',
  templateUrl: './search-box.component.html',
})
export class searchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;
  @Input()
  public placehorder: string = '';

  @Output()
  public onDebouncer = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(debounceTime(100))
      .subscribe((value) => this.onDebouncer.emit(value));
  }
  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
