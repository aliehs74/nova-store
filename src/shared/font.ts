import localFont from "next/font/local";

const font = localFont({
  src: [
    { path: "../../public/fonts/Vazir-Thin-FD.woff", weight: "100" },
    { path: "../../public/fonts/Vazir-Light-FD.woff", weight: "300" },
    { path: "../../public/fonts/Vazir-Regular-FD.woff", weight: "400" },
    { path: "../../public/fonts/Vazir-Medium-FD.woff", weight: "500" },
    { path: "../../public/fonts/Vazir-Bold-FD.woff", weight: "700" },
    { path: "../../public/fonts/Vazir-Black-FD.woff", weight: "900" },
  ],
  variable: "--font-family-vazir",
  display: "swap",
  fallback: ["Tahoma", "Arial"],
});

export default font;
