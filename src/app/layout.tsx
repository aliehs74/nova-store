import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOVA",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {

  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
