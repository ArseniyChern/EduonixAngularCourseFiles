import { Component, OnInit } from '@angular/core';
import { Consumer } from 'src/app/Model/Consumer';
import { ConsumerService } from 'src/app/Services/consumer.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  deletingConsumer: Consumer;
  toSearchConsumerEmail: string;

  searchConsumer() {
    if (this.toSearchConsumerEmail.length > 0) {
      this.deletingConsumer =
        this.consumerService.getConsumer(this.toSearchConsumerEmail);
    }
  }
  deleteConsumer() {
    this.consumerService.deleteConsumer(this.deletingConsumer);
    this.deletingConsumer = null;
  }

  constructor(private consumerService: ConsumerService) { }

  ngOnInit() {
  }

}
