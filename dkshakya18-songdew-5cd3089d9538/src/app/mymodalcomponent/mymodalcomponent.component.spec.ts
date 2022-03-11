import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymodalComponent } from './mymodalcomponent.component';

describe('MymodalcomponentComponent', () => {
  let component: MymodalComponent;
  let fixture: ComponentFixture<MymodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MymodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
