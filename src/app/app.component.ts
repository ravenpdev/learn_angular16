import { Component, Signal, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learn_angular16';

  count = signal(0);

  doubleCount: Signal<number> = computed(() => this.count() * 2);

  history: number[] = [];

  increment() {
    this.count.set(this.count() + 1);
  }

  updateValue(newValue: number) {
    this.count.update((value) => (value = newValue));
  }
}
