import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shell',
  templateUrl: 'app/views/shell.component.html'
})
export class ShellComponent {
  public SearchQuery : string = '';
  constructor(private _router : Router) {}
  public navigateSearch() {
    this._router.navigate(['/search/'+ this.SearchQuery]);
    this.SearchQuery = '';
  }
}