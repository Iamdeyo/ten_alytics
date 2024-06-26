"use client";

import {
  BellIcon,
  ChevronDownIcon,
  ChevronRightCircleIcon,
  LoaderCircleIcon,
  MenuIcon,
  SunIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToggleNav } from "./ToggleNav";

export default function TopBar() {
  const { toggleIsCollaped } = useToggleNav();
  return (
    <>
      <header className="flex h-16 items-center gap-4 border-b md:border md:rounded-2xl pl-4 pr-4 lg:pl-5 md:pr-5 bg-white md:my-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
        <Button
          variant={"ghost"}
          size={"icon"}
          className="lg:hidden"
          onClick={() => toggleIsCollaped && toggleIsCollaped(true)}
        >
          <MenuIcon />
        </Button>
        <h2 className="text-xl md:text-2xl font-medium">Dashboard</h2>
        <div className="flex items-center gap-3 ml-auto">
          <ToggleTheme />
          <Notifications />
          <UserProfile />
        </div>
      </header>
    </>
  );
}

function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button variant={"outline"} size={"icon"}>
        <LoaderCircleIcon className="animate-spin" />
      </Button>
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => setTheme("light")}
      >
        <SunIcon />
      </Button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => setTheme("dark")}
      >
        <SunIcon />
      </Button>
    );
  }
}

function Notifications() {
  return (
    <Button variant={"outline"} size={"icon"} className="">
      <BellIcon />
    </Button>
  );
}

function UserProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar className="rounded-md">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="lg:flex flex-col gap-1 truncate w-24 capitalize hidden">
            <span className="text-sm font-bold truncate">
              Name Lorem ipsum dolor sit amet.
            </span>
            <span className="text-xs font-light text-gray-600 dark:text-gray-200">
              student
            </span>
          </div>

          <ChevronDownIcon className="bg-slate-50 dark:bg-slate-800 h-5 w-5 p-1 rounded-full hidden lg:block" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Setting</DropdownMenuItem>
        <DropdownMenuItem>Log Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
