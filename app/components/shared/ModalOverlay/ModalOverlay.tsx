/* Project */
import { useSelector } from 'react-redux';

/* Project */
import { AppState } from '~/store/config';
import './ModalOverlay.css';

export const ModalOverlay = () => {
  const display = useSelector((state: AppState) => state.home.modalOverlay);
  console.log({ display });

  return (
    <div
      style={{ display: 'none' }}
      className={`fixed inset-0 z-50 flex items-end bg-black/50 sm:items-center sm:justify-center modal-overlay ${display && 'show'}`}
      aria-hidden="true"
    ></div>
  );
};
