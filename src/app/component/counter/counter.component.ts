import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset} from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(
    private store: Store<{ counter: number }>
  ) {
    this.count$ = store.pipe(select('count'));
  }

  increment(): void {
    this.store.dispatch(new Increment());
  }

  decrement(): void {
    this.store.dispatch(new Decrement());
  }

  reset(): void {
    this.store.dispatch(new Reset());
  }

  ngOnInit(): void {
  }

}
