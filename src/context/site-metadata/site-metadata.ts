import { createContext } from 'react';

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
}

const defaultState: SiteMetadata = {
  title: '',
  description: '',
  author: '',
};

export const SiteMetadataContext = createContext(defaultState);
