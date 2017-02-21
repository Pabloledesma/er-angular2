import { Component } from '@angular/core';

export class Notice {
	id: number;
	title: string;
	description: string;
	place: string;
	date: number; // timestamps
}

const NOTICES: Notice[] = [
	{ id: 1, title: 'first notice', description: 'description', place: 'Rome', date: Math.floor(Date.now()) },
	{ id: 2, title: 'second notice', description: 'description', place: 'Brasilia', date: Math.floor(Date.now()) },
	{ id: 3, title: 'thirth notice', description: 'description', place: 'Bogotá', date: Math.floor(Date.now()) },
	{ id: 4, title: 'fourth notice', description: 'description', place: 'Las Vegas', date: Math.floor(Date.now()) },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notices = NOTICES;
}
