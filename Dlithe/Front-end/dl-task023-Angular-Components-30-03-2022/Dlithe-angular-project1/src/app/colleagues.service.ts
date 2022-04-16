import { Injectable } from '@angular/core';
import { Colleague } from './colleagues';
import { cl } from 'src/colleagues_mock';

@Injectable({
  providedIn: 'root'
})
export class ColleaguesService {

colleague :any;
  
  constructor() { }
}
