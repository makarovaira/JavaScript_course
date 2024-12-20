import React from 'react';
import {storesContext} from './MainStore.ts';

export const useStore = () => React.useContext(storesContext);
