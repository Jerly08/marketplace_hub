import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Account - MarketHub',
  description: 'Manage your account, orders, and preferences on MarketHub.',
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 