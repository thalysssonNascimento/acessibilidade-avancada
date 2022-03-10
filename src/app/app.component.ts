import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  ModalRef,
  ModalService,
} from './shared/services/modal/service/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('modal') modalTemplateRef: TemplateRef<any>;

  modalRef: ModalRef;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  show() {
    const configModal = {
      templateRef: this.modalTemplateRef,
      title: 'Teste modal',
    };

    this.modalRef = this.modalService.open(configModal);
  }
}