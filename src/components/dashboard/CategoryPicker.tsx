import { TransactionType } from "@/lib/transactionTypes";
import React from "react";

interface CategoryPickerProps {
  type: TransactionType;
  onChange: (value: string) => void;
}

export default function CategoryPicker({
  type,
  onChange,
}: CategoryPickerProps) {
  return <div>CategoryPicker</div>;
}
