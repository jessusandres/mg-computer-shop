import { MutableRefObject, useEffect } from 'react';

/* Project */
import { CallbackFunction } from '~/types/app.types';

export const useOutside = (
  ref: MutableRefObject<any>,
  callback: CallbackFunction,
  visible: boolean,
) => {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (visible && ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, ref, visible]);
};
