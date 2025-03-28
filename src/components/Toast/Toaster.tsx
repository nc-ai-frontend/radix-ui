'use client';

import {
  Separator,
  Toast,
  ToastClose,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  useToast,
} from '@react-monorepo/ui';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, text, action, close, state, ...props }) => {
        return (
          <Toast key={id} data-status={state} {...props}>
            <div>{text && <ToastTitle>{text}</ToastTitle>}</div>
            {action && (
              <div className="action-wrapper">
                <Separator orientation="vertical" /> {action}
              </div>
            )}
            {close && <ToastClose />}
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
