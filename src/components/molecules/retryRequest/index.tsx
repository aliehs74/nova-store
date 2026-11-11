"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Button from "@/components/atoms/button";

const RetryRequest = () => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const t = useTranslations("common");

  return (
    <Button disabled={pending} onClick={() => startTransition(() => router.refresh())}>
      {t(pending ? "loading" : "retry")}
    </Button>
  );
};

export default RetryRequest;
