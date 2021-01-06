/**
 * @format
 */
import React from "react";
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from './App';
import {name as appName} from './app.json';

const client = new ApolloClient({
  uri: 'https://greywater.mashiat.live/graphql',
  cache: new InMemoryCache()
});

const GreywaterApp = () => (
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
)

AppRegistry.registerComponent(appName, () => GreywaterApp);
