import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegCommentComponent } from './reg-comment.component';

describe('RegCommentComponent', () => {
  let component: RegCommentComponent;
  let fixture: ComponentFixture<RegCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
