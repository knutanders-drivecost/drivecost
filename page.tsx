import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "DriveCost – Know what your car really costs",
  description: "Calculate the true cost of owning any vehicle in under 60 seconds.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
