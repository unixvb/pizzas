import {OnDestroy} from '@angular/core';
import {Subject} from 'rxjs/index';

export class Common implements OnDestroy {
  protected unsubscribe$: Subject<void> = new Subject<void>();

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
