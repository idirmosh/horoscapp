import { createContext } from 'react';

const FetchContext = createContext();

export const FetchProvider = FetchContext.Provider;
export const FetchConsumer = FetchContext.Consumer;

export default FetchContext;
