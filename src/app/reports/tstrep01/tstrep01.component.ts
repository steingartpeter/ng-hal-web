import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tstrep01',
  templateUrl: './tstrep01.component.html',
  styleUrls: ['./tstrep01.component.css'],
})
export class Tstrep01Component implements OnInit {
  data: rcrdBOVal[] = [];
  constructor() {}
  ngOnInit(): void {}
}
interface rcrdBOVal {
  rec_id: number;
  country: string;
  crncy: string;
  nrofSlsDocs: number;
  nrOfSoItms: number;
  qttOfOrdrdPcs: number;
  value: number;
  valueInEur: number;
}
