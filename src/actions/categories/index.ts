"use server";

import db from "@/lib/db";

import {
  CreateCategorySchema,
  CreateCategorySchemaType,
} from "@/schemas/categories";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function CreateCategory(form: CreateCategorySchemaType) {
  const parsedBody = CreateCategorySchema.safeParse(form);
  if (!parsedBody.success) {
    throw new Error("bad request");
  }

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/");
  }

  const { name, icon, type } = parsedBody.data;
  return await db.category.create({
    data: {
      userId: user.id,
      name,
      icon,
      type,
    },
  });
}
