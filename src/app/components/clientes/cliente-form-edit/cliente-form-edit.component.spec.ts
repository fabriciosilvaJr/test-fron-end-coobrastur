import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFormEditComponent } from './cliente-form-edit.component';

describe('ClienteFormEditComponent', () => {
  let component: ClienteFormEditComponent;
  let fixture: ComponentFixture<ClienteFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
