export const MY_ADD_ACTION = 'MY_ACTION';

export const myAddAction = (payload) => ({type: 'MY_ADD_ACTION', data: payload,
  });

  export const MY_LOGIN_ACTION = 'MY_LOGIN_ACTION';

  export const myLoginAction = (payload) => (
    {
      type: MY_LOGIN_ACTION,
      payload,
    });
