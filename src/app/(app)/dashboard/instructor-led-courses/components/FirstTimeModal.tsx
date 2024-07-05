"use client";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { XIcon } from "lucide-react";
import { useState } from "react";

export default function FirstTimeModal() {
  const [open, setOpen] = useState(true);
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-[#FBFDFF] dark:bg-slate-900">
        <div className="relative">
          <Button
            className=" absolute -top-20 -right-6 rounded-full"
            size={"icon"}
            variant={"outline"}
            onClick={() => setOpen(false)}
          >
            <XIcon />
          </Button>
          <AlertDialogHeader className="flex flex-col gap-5 items-center bg-white dark:bg-neutral-950 rounded-xl px-3 py-4">
            <AlertDialogTitle>
              Not sure what course or career part to pick?
            </AlertDialogTitle>
            <AlertDialogDescription className="gap-5 flex flex-col items-center">
              <Icons.moonNote />
              <span>
                You can schedule a call with a course adviser or create a
                learning plan that would be used to recommend courses for you.
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col sm:flex-col items-center gap-5 mt-5">
            <Button className="btn-primary w-full !rounded-full max-w-72">
              Create a learning plan
            </Button>
            <Button className="btn-secondary rounded-full w-full max-w-72">
              Download Brochure
            </Button>
          </AlertDialogFooter>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
