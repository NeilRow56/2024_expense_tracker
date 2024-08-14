"use server";

import db from "@/lib/db";
import { UpdateUserCurrencySchema } from "@/schemas/userSettings";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function UpdateUserCurrency(currency: string) {
  const parseBody = UpdateUserCurrencySchema.safeParse({
    currency,
  });
  if (!parseBody.success) {
    throw parseBody.error;
  }

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/");
  }

  const userSettings = await db.userSettings.update({
    where: {
      userId: user.id,
    },
    data: {
      currency,
    },
  });
  return userSettings;
}
