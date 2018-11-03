import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicRoomComponent } from './topic-room.component';

describe('TopicRoomComponent', () => {
  let component: TopicRoomComponent;
  let fixture: ComponentFixture<TopicRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
