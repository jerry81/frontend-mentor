import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ping';
  activeButtons = { fb: false, ig: false, twit: false }
  error: Boolean = false;
    
  toggleError() {
        this.error = !this.error
    }

  iconClick(ev) {
    console.log('ev cur and tar', ev.currentTarget, ev.target)
    const targetId = ev.target.id
    if (targetId) {
      this.activeButtons[targetId] = !this.activeButtons[targetId]
    }
  }
}

