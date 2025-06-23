import "./globals.css";
import NavbarWrapper from "./NavbarWrapper";
import NProgressHandler from "./NProgressHandler";

export const metadata = {
  title: "Aaqib Shaheer | QA Engineer",
  description:
    "QA Automation Engineer specializing in test automation, API testing, and quality assurance solutions.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NProgressHandler />
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
