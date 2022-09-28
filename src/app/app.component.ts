import {Component, OnInit} from '@angular/core';
import {Storage} from '@capacitor/storage';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {
  }

  // async langCheck() {
  //   const {value} = await Storage.get({key: 'lang'});
  //   console.log(`Helaalo ${value}!`);
  //   if (value !== null) {
  //     this.translate.use(value);
  //     console.log(`Heaaaaallo ${value}!`);
  //   }

  // }

  async ngOnInit() {
    //await this.langCheck();
  }
}
