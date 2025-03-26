'use client';

import { ReactNode, useState } from 'react';
import { DialogContext } from './Context';

type DialogState = {
  [key: string]: boolean;
};

export function DialogProvider({ children }: { children: ReactNode }) {
  const [dialogs, setDialogs] = useState<DialogState>({});

  const openDialog = (id: string) =>
    setDialogs((prev) => ({ ...prev, [id]: true }));
  const closeDialog = (id: string) =>
    setDialogs((prev) => ({ ...prev, [id]: false }));
  const isOpen = (id: string) => dialogs[id] ?? false;

  return (
    <DialogContext.Provider value={{ openDialog, closeDialog, isOpen }}>
      {children}
    </DialogContext.Provider>
  );
}
