import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'poke-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  showOptions = false;

  @Input() options: number[] = [];
  @Output()
  public selectUser: EventEmitter<number> = new EventEmitter();

  public myForm: FormGroup = this.fb.group({
    generation: ['Elija una Generacion'],
  });

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}
  selectUserGeneration(option: number) {
    this.myForm.controls['generation'].setValue(option);
    this.selectUser.emit(this.myForm.get('generation')?.value);
  }
}
