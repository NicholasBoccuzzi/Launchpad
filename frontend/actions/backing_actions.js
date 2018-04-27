import * as BackingAPIUtil from '../util/backing_api_util.js';

export const RECEIVE_BACKING = "RECEIVE_BACKING";
export const RECEIVE_BACKING_ERRORS = "RECEIVE_BACKING_ERRORS";
export const CLEAR_BACKING_ERRORS = "CLEAR_BACKING_ERRORS";

export const receiveBacking = (backing) => {
  return ({
    type: RECEIVE_BACKING,
    backing
  });
};

export const receiveBackingErrors = errors => {
  return ({
    type: RECEIVE_BACKING_ERRORS,
    errors
  });
};


export const clearBackingErrors = () => ({
  type: CLEAR_BACKING_ERRORS,
});


export const createBacking = (backing) => dispatch => {
  return (
    BackingAPIUtil.createBacking(backing).then(backing => dispatch(receiveBacking(backing)),
    err => dispatch(receiveBackingErrors(err))).then((backing) => {
      let origin = window.location.origin + "/#/";
      let userEdit = `user/${backing.backing.user_id}`;
      window.location.assign(origin + userEdit);
    })
  );
};
