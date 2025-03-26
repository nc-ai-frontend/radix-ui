'use client';

import { createContext } from 'react';

export interface DialogContextType {
  openDialog: (id: string) => void;
  closeDialog: (id: string) => void;
  isOpen: (id: string) => boolean;
}

export const DialogContext = createContext<DialogContextType | null>(null);
