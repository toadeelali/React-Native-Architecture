export const createAction = (type) => {
  const actionCreator = (payload = null) => ({
    type,
    payload,
    error: payload instanceof Error,
  });
  actionCreator.toString = () => type;

  return actionCreator;
};
