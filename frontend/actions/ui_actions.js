export const TOGGLE_PROFILE_DROPDOWN = "TOGGLE_PROFILE_DROPDOWN";
export const ACTIVATE_EXPLORE_MODAL = "ACTIVATE_EXPLORE_MODAL";
export const DEACTIVATE_EXPLORE_MODAL = "DEACTIVATE_EXPLORE_MODAL";
export const TOGGLE_ERROR_MODAL = "TOGGLE_ERROR_MODAL";
export const TOGGLE_CREATE_PROJECT_MODAL = "TOGGLE_CREATE_PROJECT_MODAL";
export const TOGGLE_UPDATE_PROJECT_MODAL = "TOGGLE_UPDATE_PROJECT_MODAL";
export const SWITCH_TABS = "SWITCH_TABS";
export const CHECK_REWARD_COUNT = "CHECK_REWARD_COUNT";
export const TOGGLE_CATEGORY_CHOICES = "TOGGLE_CATEGORY_CHOICES";
export const TOGGLE_COUNTRY_CHOICES = "TOGGLE_COUNTRY_CHOICES";
export const UPDATE_PAGE = "UPDATE_PAGE";
export const UPDATE_AGE = "UPDATE_AGE";
export const UPDATE_CARD = "UPDATE_CARD";
export const UPDATE_BANK = "UPDATE_BANK";
export const LOAD_CURRENT_USER_INFO = "LOAD_CURRENT_USER_INFO";
export const TOGGLE_CATEGORY_MODAL = "TOGGLE_CATEGORY_MODAL";
export const TOGGLE_LOCATION_MODAL = "TOGGLE_LOCATION_MODAL";

export const toggleProfileDropDown = () => {
  return {
    type: TOGGLE_PROFILE_DROPDOWN
  };
};

export const activateExploreModal = () => {
  return {
    type: ACTIVATE_EXPLORE_MODAL
  };
};

export const deactivateExploreModal = () => {
  return {
    type: DEACTIVATE_EXPLORE_MODAL
  };
};

export const toggleErrorModal = () => {
  return {
    type: TOGGLE_ERROR_MODAL
  };
};

export const toggleCreateProjectModal = () => {
  return {
    type: TOGGLE_CREATE_PROJECT_MODAL
  };
};

export const toggleUpdateProjectModal = () => {
  return {
    type: TOGGLE_UPDATE_PROJECT_MODAL
  };
};

export const switchTabs = () => {
  return {
    type: SWITCH_TABS
  };
};

export const checkRewardCount = () => {
  return {
    type: CHECK_REWARD_COUNT
  };
};

export const toggleCategoryChoices = () => {
  return {
    type: TOGGLE_CATEGORY_CHOICES
  };
};

export const toggleCountryChoices = () => {
  return {
    type: TOGGLE_COUNTRY_CHOICES
  };
};

export const updatePage = () => {
  return {
    type: UPDATE_PAGE
  };
};

export const updateAge = () => {
  return {
    type: UPDATE_AGE
  };
};
export const updateCard = () => {
  return {
    type: UPDATE_CARD
  };
};
export const updateBank = () => {
  return {
    type: UPDATE_BANK
  };
};

export const loadCurrentUserInfo = () => {
  return {
    type: LOAD_CURRENT_USER_INFO
  };
};

export const toggleCategoryModal = () => {
  return {
    type: TOGGLE_CATEGORY_MODAL
  };
};

export const toggleLocationModal = () => {
  return {
    type: TOGGLE_LOCATION_MODAL
  };
};
