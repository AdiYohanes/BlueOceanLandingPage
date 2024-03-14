import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const ActionButton = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-5 items-start w-full text-lg text-black mt-10">
                  <Link href="/">Home</Link>
                  <Link href="/">Product</Link>
                  <Link href="/">Our Projects</Link>
                  <Link href="/">Contact Us</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      
    </div>
  );
};

export default ActionButton;
