export const TOGGLE_PROFILE_DROPDOWN = "TOGGLE_PROFILE_DROPDOWN";
export const TOGGLE_ERROR_MODAL = "TOGGLE_ERROR_MODAL";
export const TOGGLE_CREATE_PROJECT_MODAL = "TOGGLE_CREATE_PROJECT_MODAL";
export const TOGGLE_UPDATE_PROJECT_MODAL = "TOGGLE_UPDATE_PROJECT_MODAL";
export const SWITCH_TABS = "SWITCH_TABS";

export const toggleProfileDropDown = () => {
  return {
    type: TOGGLE_PROFILE_DROPDOWN
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
