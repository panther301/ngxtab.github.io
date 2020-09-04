import { Component } from '@angular/core';
import { TabGroupConfig } from 'ngx-tab-group';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-tab-group';
  tabIndex = 0
  // total tab we coded in the html. this one for previous and next functionality.
  totalTab = 4

  text1 = "import { NgxTabGroupModule } from 'ngx-tab-group'"

  config: TabGroupConfig = {
    position: 'horizontal',
    // coClass: 'tab-panel'
  }

  config1: TabGroupConfig = {
    position: 'horizontal',
    coClass: 'tab-panel'
  }

  config2: TabGroupConfig = {
    position: 'horizontal',
    coClass: 'tab-panel'
  }
  tIndex = 1


  onClick() {
    if (this.config1.position === 'horizontal') {
      this.config1.position = 'vertical'
    } else {
      this.config1.position = 'horizontal'
    }
  }

  onPre() {
    if (this.tabIndex === 0) {
      return;
    }
    this.tabIndex = this.tabIndex - 1
  }

  onNext() {
    if (this.tabIndex === this.totalTab) {
      return;
    }
    this.tabIndex = 1 + this.tabIndex
  }

  onIndexChange(event) {
    this.tabIndex = event
    // console.log(event)
  }
}
