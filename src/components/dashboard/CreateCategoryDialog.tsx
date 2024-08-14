import { TransactionType } from "@/lib/transactionTypes";
import { Category } from "@prisma/client";
import React, { ReactNode } from "react";

interface CreateCategoryDialogProps {
  type: TransactionType;
  successCallback: (category: Category) => void;
  trigger?: ReactNode;
}

export default function CreateCategoryDialog({
  type,
  successCallback,
  trigger,
}: CreateCategoryDialogProps) {
  return <div>CreateCategoryDialog</div>;
}
