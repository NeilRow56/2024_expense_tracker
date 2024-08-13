import db from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/");
  }
  // id = the kinde user     i.e. user.id
  let userSettings = await db.userSettings.findFirst({
    where: {
      userId: user.id,
    },
  });
  //
  if (!userSettings) {
    userSettings = await db.userSettings.create({
      data: {
        userId: user.id,
        currency: "GBP",
      },
    });
  }
  // Revalidate the home page that uses the user currency
  revalidatePath("/dashboard");
  return Response.json(userSettings);
}
