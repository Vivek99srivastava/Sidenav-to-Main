import { Component } from '@angular/core';
import { FullscreenService } from './fullscreen.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './src/app.component.html',
  styleUrls: ['./src/app.component.css']
})
export class AppComponent {
  title = 'app';
  fullscreen$: Observable<boolean>;

  constructor(private fullscreenService: FullscreenService) {

  }

  ngOnInit() {
    this.fullscreen$ = this.fullscreenService.fullscreen$;
  }
}
