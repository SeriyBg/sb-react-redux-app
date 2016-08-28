import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

describe('courseActions', () => {
  describe('createCourseSuccess', () => {
    it('should cereate a CREATE_COURSE_SUCCESS actions', () => {
      const course = {id: 'clean-code', title: 'Clean code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      const action = courseActions.createCourseSuccess(course);

      expect(action).toEqual(expectedAction);
    });
  });
});
