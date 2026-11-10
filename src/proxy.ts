import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale } from "@/i18n";
import routes from "@/shared/routes";

const proxy = (request: NextRequest) => {
  const destination = request.nextUrl.clone();
  destination.pathname = routes.home(defaultLocale);

  return NextResponse.redirect(destination);
};

export const config = {
  matcher: ["/"],
};

export default proxy;
