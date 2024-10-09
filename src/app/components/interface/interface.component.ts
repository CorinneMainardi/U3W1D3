import { Component } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.scss',
})
export class InterfaceComponent {}
export interface Ipost {
  id: number;
  title: string;
  body: string;
  tags: string;
  userId: number;
  active: boolean;
}
