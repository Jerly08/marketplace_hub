import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping Cart - MarketHub',
  description: 'View and manage items in your shopping cart on MarketHub.',
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 