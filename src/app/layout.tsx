import type { Metadata } from 'next';
import './styles/globals.css';
import Header from '@/app/components/common/Header';

export const metadata: Metadata = {
  title: '이화여자대학교 컴퓨터공학전공 학생회',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
    </html>
  );
}
