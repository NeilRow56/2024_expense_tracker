"use client";

import { TransactionType } from "@/lib/transactionTypes";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface CategoryPickerProps {
  type: TransactionType;
  onChange: (value: string) => void;
}

export default function CategoryPicker({
  type,
  onChange,
}: CategoryPickerProps) {
  const categoriesQuery = useQuery({
    queryKey: ["categories", type],
    queryFn: () =>
      fetch(`/api/categories?type=${type}`).then((res) => res.json()),
  });
  return <div>CategoryPicker</div>;
}
