import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessfollowComponent } from './processfollow.component';

describe('ProcessfollowComponent', () => {
  let component: ProcessfollowComponent;
  let fixture: ComponentFixture<ProcessfollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessfollowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessfollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
