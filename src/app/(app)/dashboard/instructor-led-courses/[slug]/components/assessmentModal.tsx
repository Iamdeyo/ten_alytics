"use client";
import { XIcon } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function AssessmentModal() {
  const [open, setOpen] = useState(true);
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="sm:max-w-[90%] max-h-[70%] md:max-h-[80%] h-full p-0">
        <Button
          className=" absolute -top-16 right-0 rounded-full"
          size={"icon"}
          variant={"outline"}
          onClick={() => setOpen(false)}
        >
          <XIcon />
        </Button>
        <ScrollArea className="h-full p-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="w-full" asChild>
                <Progress value={33} />
              </TooltipTrigger>
              <TooltipContent>
                <p>33%</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <AlertDialogHeader className="flex flex-col gap-5 items-center rounded-xl px-3 py-4">
            <AlertDialogTitle>
              Test your knowledge on Module 1: Introduction to Excel
            </AlertDialogTitle>
            <AlertDialogDescription className="hidden">
              Assement modal
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="w-full">
              <Image
                alt="question Image"
                src={"/que.png"}
                width={500}
                height={500}
                sizes="100vh"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div className="rounded-lg border border-neutral-200 shadow-sm dark:border-neutral-800 p-2 w-full">
              <div className="flex items-center justify-between">
                <p className="font-bold">Picking a unique ID</p>
                <span className="p-1 rounded-lg bg-gradient-to-r from-yellow-100 via-amber-400 to-yellow-500 text-neutral-900 font-bold text-sm">
                  +5 ponits
                </span>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">
                A unique identifier is a value that distinguishes a record from
                others in the same table. In the employees table, which fields
                do you believe is the most suitable choice for a unique
                identifier?
              </p>
              <div className="rounded-lg border border-neutral-200 shadow-sm dark:border-neutral-800 p-2 mt-10 ">
                <RadioGroup
                  defaultValue="option-one"
                  className="flex flex-col gap-4"
                >
                  <div className="flex items-center space-x-2 bg-[#FBFDFF] dark:bg-slate-900 p-3 rounded-xl">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Option One</Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-[#FBFDFF] dark:bg-slate-900 p-3 rounded-xl">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Option Two</Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-[#FBFDFF] dark:bg-slate-900 p-3 rounded-xl">
                    <RadioGroupItem value="option-three" id="option-three" />
                    <Label htmlFor="option-three">Option Three</Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-[#FBFDFF] dark:bg-slate-900 p-3 rounded-xl">
                    <RadioGroupItem value="option-four" id="option-four" />
                    <Label htmlFor="option-four">Option Four</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </ScrollArea>
        {/* <div className="overflow-hidden overflow-y-auto h-full">
        </div> */}
      </AlertDialogContent>
    </AlertDialog>
  );
}
