"use client";

import React from "react";
import { TransactionType } from "@/lib/TransactionTypes";
import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { cn } from "@/lib/utils";

interface TransactionDialogProps {
  trigger: ReactNode;
  type: TransactionType;
}

export default function CreateTransactionDialog({
  trigger,
  type,
}: TransactionDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Create a new{" "}
            <span
              className={cn(
                "m-1",
                type === "income" ? "text-emerald-500" : "text-red-500"
              )}
            >
              {type}
            </span>
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
