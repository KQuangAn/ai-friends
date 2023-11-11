"use client";
import { Menu, Sparkles, User } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import MobileSidebar from "./mobile-sidebar";
import { ComboBoxData, Combobox } from "./combo-box";
import axios from "axios";
import { getLanguage } from "@/app/actions/language";
const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});
interface NavbarProps {
  data: ComboBoxData[];
}

const Navbar = ({ data }: NavbarProps) => {
  const router = useRouter();

  const onClick = (item: string | undefined) => {
    const query = { language: item };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="fixed w-full h-16 z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            NEWS
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button variant="premium" size="sm">
          Upgrade
          <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
        </Button>
        <Combobox data={data} placeholder="Select language" />
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
