"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const products: { title: string; description: string; href: string }[] = [
  {
    title: "Oil Boom",
    description:
      "An oil boom is a period of large inflow of income as a result of high global oil prices or large oil production in an econom",
    href: "/",
  },
  {
    title: "Skimmer",
    description:
      "An oil skimmer is a machine that removes floating oil and grease from liquid",
    href: "/",
  },
  {
    title: "Response Boat",
    description: "Response Boat",
    href: "/",
  },
  {
    title: "Vacuum Truck",
    description: "Vacuum Truck",
    href: "/",
  },
  {
    title: "Dispersant Pump",
    description: "Vacuum Truck",
    href: "/",
  },
  {
    title: "Storage Tank",
    description: "Vacuum Truck",
    href: "/",
  },
  {
    title: "Absorbent",
    description: "Vacuum Truck",
    href: "/",
  },
  {
    title: "Waste Water Treatment",
    description: "Vacuum Truck",
    href: "/",
  },
  {
    title: "Plant (WWTP)",
    description: "Vacuum Truck",
    href: "/",
  },
];

const projects: { title: string; description: string; href: string }[] = [
  {
    title: "Oil Spill Response",
    description: "Vacuum Truck",
    href: "/ourprojects/oilspillresponse",
  },
  {
    title: "Training",
    description: "Vacuum Truck",
    href: "/",
  },
  {
    title: "Design & Manufacturing",
    description: "Vacuum Truck",
    href: "/",
  },
  {
    title: "Assessment",
    description: "Vacuum Truck",
    href: "/",
  },
];

export function NavigationMenuBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-4 gap-8">
        <NavigationMenuItem className="mr-4">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink>About</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <a href="/products">Product</a>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {products.map((product) => (
                <ListItem
                  key={product.title}
                  title={product.title}
                  href={product.href}
                >
                  {product.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <a href="/ourprojects">Our Projects</a>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {projects.map((project) => (
                <ListItem
                  key={project.title}
                  title={project.title}
                  href={project.href}
                >
                  {project.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  HTMLAnchorElement, // Change this type as per your requirement
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href} // Pass the href to the anchor tag
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
