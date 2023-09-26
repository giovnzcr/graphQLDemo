// src/app/item-list/item-list.component.ts
import { Component, OnInit } from '@angular/core';
import { GraphExampleService } from '../graph-example.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  items: any[] = [];

  constructor(private graphqlService: GraphExampleService) {}

  ngOnInit(): void {
    this.graphqlService.getAllItems().subscribe((result) => {
      console.log(result)
      this.items = result; // Update this line based on your GraphQL response structure
    });
  }
}
