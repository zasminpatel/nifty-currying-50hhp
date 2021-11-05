export const appSetting = () => async (dispatch) => {
  try {
    debugger;
    //const res = await TutorialDataService.create({ title, description });
    const res = {
      isLoggedin: true,
      isOpen: false
    };

    dispatch({
      type: "APP_Setting",
      // payload: res.data
      payload: res
    });

    // return Promise.resolve(res.data);
    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const openAction = () => async (dispatch) => {
  dispatch({
    type: "OPEN"
  });
  //return Promise.resolve(res);
};

export const closeAction = () => async (dispatch) => {
  dispatch({
    type: "CLOSE"
  });
};
