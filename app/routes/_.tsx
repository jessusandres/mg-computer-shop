import { Outlet } from '@remix-run/react';

/* Project */
import {
  CartMenu,
  Footer,
  Header,
  ModalOverlay,
  Navbar,
  ProductModal,
  Sidebar,
  WhatsappPopUp,
} from '~/components/shared';

export default function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Navbar />
      <ModalOverlay />
      <Outlet />
      <ProductModal />
      <WhatsappPopUp />
      <CartMenu />
      <Footer />
    </>
  );
}
