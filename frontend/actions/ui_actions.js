export const TOGGLE_PROFILE_DROPDOWN = "TOGGLE_PROFILE_DROPDOWN";
export const TOGGLE_ERROR_MODAL = "TOGGLE_ERROR_MODAL";

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
