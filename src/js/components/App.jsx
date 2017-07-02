import React from 'react';
import Home from './Home.jsx';

const firebase = require('firebase/app');
/**
 * @description Home Page Component
 * @class
 */
export default class App extends React.Component {
  /**
   * Creates an instance of App.
   * @memberof App
   */
  constructor() {
    super();
    const config = {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    console.log(firebase.apps.length);
  }
  /**
   * @description render Home Component
   * @returns {JSX.Element} Home Page
   */
  render() {
    return (
      <div>
        <Home/>
      </div>
    );
  }

}