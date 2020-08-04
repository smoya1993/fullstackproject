import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPostComponent } from './reg-post.component';

describe('RegPostComponent', () => {
  let component: RegPostComponent;
  let fixture: ComponentFixture<RegPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
