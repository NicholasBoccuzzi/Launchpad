import * as RewardAPIUtil from '../util/reward_api_util.js';

export const RECEIVE_REWARD = "RECEIVE_REWARD";
export const RECEIVE_REWARD_ERRORS = "RECEIVE_REWARD_ERRORS";
export const CLEAR_REWARD_ERRORS = "CLEAR_REWARD_ERRORS";

export const receiveReward = (reward) => {
  return ({
    type: RECEIVE_REWARD,
    reward
  });
};

export const receiveRewardErrors = errors => {
  return ({
    type: RECEIVE_REWARD_ERRORS,
    errors
  });
};


export const clearRewardErrors = () => ({
  type: CLEAR_REWARD_ERRORS,
});


export const createReward = (reward) => dispatch => {
  return (
    RewardAPIUtil.createReward(reward).then(reward => dispatch(receiveReward(reward)),
    err => dispatch(receiveRewardErrors(err)))
  );
};
