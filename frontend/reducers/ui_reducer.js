import {
  SWITCH_TABS,
  TOGGLE_CREATE_PROJECT_MODAL,
  TOGGLE_PROFILE_DROPDOWN,
  TOGGLE_ERROR_MODAL,
  TOGGLE_UPDATE_PROJECT_MODAL,
  TOGGLE_CATEGORY_CHOICES,
  TOGGLE_COUNTRY_CHOICES,
  CHECK_REWARD_COUNT,
  UPDATE_PAGE,
  UPDATE_AGE
} from '../actions/ui_actions.js';
import { merge } from 'lodash';

const initialState = {
  profileDropDownActive: false,
  errorModalActive: false,
  projectCreateUpdateModalActive: false,
  switchedTabs: false,
  rewardCount: false,
  loadedRewards: false,
  categoryChoicesActive: false,
  countryChoicesActive: false,
  updatedPage: false,
  ageVerified: false,
  bankVerified: false,
  cardVerified: false
};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
  case TOGGLE_PROFILE_DROPDOWN:
    let newState = merge({}, state);
    newState.profileDropDownActive = !newState.profileDropDownActive;
    return newState;
  case TOGGLE_ERROR_MODAL:
    let newErrorState = merge({}, state);
    newErrorState.errorModalActive = !newErrorState.errorModalActive;
    return newErrorState;
  case TOGGLE_CREATE_PROJECT_MODAL:
    let newProjectState = merge({}, state);
    newProjectState.projectCreateUpdateModalActive = !newProjectState.projectCreateUpdateModalActive;
    return newProjectState;
  case TOGGLE_UPDATE_PROJECT_MODAL:
    let editProjectState = merge({}, state);
    editProjectState.projectCreateUpdateModalActive = !editProjectState.projectCreateUpdateModalActive;
    return editProjectState;
  case SWITCH_TABS:
    let switchTabs = merge({}, state);
    switchTabs.switchedTabs = !switchTabs.switchedTabs;
    return switchTabs;
  case TOGGLE_CATEGORY_CHOICES:
    let categoryChoices = merge({}, state);
    categoryChoices.categoryChoicesActive = !categoryChoices.categoryChoicesActive;
    return categoryChoices;
  case CHECK_REWARD_COUNT:
    let rewardsCounter = merge({}, state);
    rewardsCounter.rewardCount = !rewardsCounter.rewardCount;
    rewardsCounter.loadedRewards = true;
    return rewardsCounter;
  case TOGGLE_COUNTRY_CHOICES:
    let countryChoices = merge({}, state);
    countryChoices.countryChoicesActive = !countryChoices.countryChoicesActive;
    return countryChoices;
  case UPDATE_PAGE:
    let updatePage = merge({}, state);
    updatePage.updatedPage = !updatePage.updatedPage;
    return updatePage;
  case UPDATE_AGE:
    let updateAge = merge({}, state);
    updateAge.ageVerified = !updateAge.ageVerified;
    return updateAge;
  default:
    return state;
  }
};
