const buttonClicked = () => ({type: 'BUTTON_CLICKED'});

export const clickButton = () => dispatch => {
  dispatch(buttonClicked());
};

