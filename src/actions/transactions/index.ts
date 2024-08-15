"use server";

import db from "@/lib/db";

import {
  CreateTransactionSchema,
  CreateTransactionSchemaType,
} from "@/schemas/transactions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { redirect } from "next/navigation";

export async function CreateTransaction(form: CreateTransactionSchemaType) {
  const parsedBody = CreateTransactionSchema.safeParse(form);
  if (!parsedBody.success) {
    throw new Error(parsedBody.error.message);
  }
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/");
  }

  const { amount, category, date, description, type } = parsedBody.data;
  const categoryRow = await db.category.findFirst({
    where: {
      userId: user.id,
      name: category,
    },
  });

  if (!categoryRow) {
    throw new Error("category not found");
  }

  // NOTE: don't make confusion between $transaction ( prisma ) and prisma.transaction (table)

  await db.$transaction([
    // Create user transaction
    db.transaction.create({
      data: {
        userId: user.id,
        amount,
        date,
        description: description || "",
        type,
        category: categoryRow.name,
        categoryIcon: categoryRow.icon,
      },
    }),

    // Update month and year totals
  ]);
}

// async function sumTotalAmountByMonth() {
//   const transactions = await db.transaction.findMany();

//   const transactionsByMonth = transactions.reduce(
//     (result: any, { createdAt, amount }) => {
//       const month = createdAt.toLocaleString("default", { month: "long" });
//       result[month] = (result[month] || 0) + amount;
//       return result;
//     }
//   );

//   return transactionsByMonth;
// }

// sumTotalAmountByMonth()
//   .then((salesByMonth) => console.log(salesByMonth))
//   .catch((error) => console.error(error));
