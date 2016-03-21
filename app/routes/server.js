import React from 'react';
import routes from '../routes.js';
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import appReducer from '../reducers';
import thunk from 'redux-thunk';


function fetchAll(store, renderProps) {
  return renderProps.components.map((componentClass) => {
    if (componentClass && componentClass.fetchData) {
      return componentClass.fetchData(store.dispatch, renderProps.params)
    }
  });
}

module.exports = function(app) {
  app.get('/*', (req, res) => {
    match({
      routes,
      location: req.url
    }, (error, redirectLocation, renderProps) => {

      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {

        let store = createStore(appReducer, {
          staticItems: [
            {
              text: 'staticItem1'
            },
            {
              text: 'staticItem2'
            }
          ],
          remoteItems: {
            isFetching: false,
            items: []
          },
          selectedRemoteItem: {
            isFetching: false,
            item: {}
          }
        }, applyMiddleware(
          thunk
        ));

        Promise.all(fetchAll(store, renderProps)).then(() => {
          try {
            const finalState = store.getState();

            res.render('index.ejs', {
              reactOutput: renderToString(
                <Provider store={store}>
                  <RouterContext {...renderProps} />
                </Provider>
              ),
              initialState: store.getState()
            });
          } catch(e) {
            console.log(e);
            res.status(500).send("Something went wrong");
          }
        }).catch((response) => {
          console.log(response);
          response.status(500).send("Something went wrong");
        });
      } else {
        res.status(404).send('Not found')
      }
    })
  });
};
