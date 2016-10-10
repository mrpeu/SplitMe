// @flow weak

import crashReporter from 'modules/crashReporter/crashReporter';

function crashMiddleware(store) {
  return (next) => (action) => {
    crashReporter.captureBreadcrumb({
      message: action.type,
      category: 'redux',
    });

    crashReporter.setExtraContext({
      state: store.getState(),
      action,
    });

    try {
      return next(action);
    } catch (err) {
      crashReporter.captureException(err);
      throw err;
    }
  };
}

export default crashMiddleware;
