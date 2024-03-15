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
                  <Link href="/about">About</Link>
                  <Link href="/products">Product</Link>
                  <Link href="/ourprojects">Our Projects Us</Link>
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
