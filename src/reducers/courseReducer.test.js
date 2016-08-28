import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('courseReducer', () => {
  it('Should add course when passed CREATE_COURSE_SUCCESS', () => {
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];
    const newCourse = {title: 'C'};
    const action = actions.createCourseSuccess(newCourse);

    const expectedState = [
      {title: 'A'},
      {title: 'B'},
      {title: 'C'}
    ];

    const newState = courseReducer(initialState, action);

    expect(newState.length).toEqual(3);
    expect(newState).toEqual(expectedState);
  });

  it('Should update course when passed UPDATE_COURSE_SUCCESS', () => {
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'}
    ];
    const course = {id: 'A', title: 'UpdatedA'};
    const action = actions.updateCourseSuccess(course);

    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id == course.id);
    const untochedCourse = newState.find(a => a.id == 'B');

    expect(newState.length).toEqual(2);
    expect(updatedCourse.title).toEqual('UpdatedA');
    expect(untochedCourse.title).toEqual('B');
  });
});
