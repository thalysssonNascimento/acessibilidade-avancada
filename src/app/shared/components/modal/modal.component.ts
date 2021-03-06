import { Component, HostBinding, OnInit } from '@angular/core';
import { fade } from '@animations/fade';
import { ModalConfig } from '@interfaces/modal/modal-config.interface';
import { ModalRef } from 'src/app/shared/models/modal-ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade],
})
export class ModalComponent implements OnInit {
  @HostBinding('@fade') fade = true;

  modalRef: ModalRef;
  config: ModalConfig;

  constructor() {}

  ngOnInit() {}
}
