"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

const academicsLinks = [
  { title: "Programs", href: "/academics#programs" },
  { title: "Curriculum", href: "/academics#curriculum" },
  { title: "Faculty", href: "/academics#faculty" },
  { title: "Research", href: "/academics#research" },
];

const admissionsLinks = [
  { title: "Application Process", href: "/admissions#process" },
  { title: "Requirements", href: "/admissions#requirements" },
  { title: "Financial Aid", href: "/admissions#financial-aid" },
  { title: "Visit Campus", href: "/admissions#visit" },
];

const campusLifeLinks = [
  { title: "Student Activities", href: "/campus-life#activities" },
  { title: "Housing", href: "/campus-life#housing" },
  { title: "Athletics", href: "/campus-life#athletics" },
  { title: "Arts & Culture", href: "/campus-life#arts" },
];

export default function Navigation() {
  const pathname = usePathname();
  const isMobile = useMobile();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
              S
            </div>
          </motion.div>
          <motion.span
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-bold text-xl hidden sm:inline-block"
          >
            SBN Horizon
          </motion.span>
        </Link>

        {isMobile ? (
          <MobileNav pathname={pathname} />
        ) : (
          <DesktopNav pathname={pathname} />
        )}
      </div>
    </header>
  );
}

function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <div className="flex items-center space-x-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  pathname === "/" && "text-primary"
                )}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  pathname === "/about" && "text-primary"
                )}
              >
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                pathname.startsWith("/academics") && "text-primary"
              )}
            >
              Academics
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {academicsLinks.map((link) => (
                  <ListItem
                    key={link.title}
                    title={link.title}
                    href={link.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                pathname.startsWith("/admissions") && "text-primary"
              )}
            >
              Admissions
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {admissionsLinks.map((link) => (
                  <ListItem
                    key={link.title}
                    title={link.title}
                    href={link.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                pathname.startsWith("/campus-life") && "text-primary"
              )}
            >
              Campus Life
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {campusLifeLinks.map((link) => (
                  <ListItem
                    key={link.title}
                    title={link.title}
                    href={link.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  pathname === "/contact" && "text-primary"
                )}
              >
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button asChild>
        <Link href="/admissions#apply">Apply Now</Link>
      </Button>
    </div>
  );
}

function MobileNav({ pathname }: { pathname: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="/"
            className={cn(
              "text-lg font-medium transition-colors hover:text-primary",
              pathname === "/" && "text-primary"
            )}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-lg font-medium transition-colors hover:text-primary",
              pathname === "/about" && "text-primary"
            )}
          >
            About
          </Link>
          <div className="py-2">
            <h3 className="mb-2 text-lg font-semibold">Academics</h3>
            <div className="grid gap-2 pl-4">
              {academicsLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-sm hover:text-primary"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="py-2">
            <h3 className="mb-2 text-lg font-semibold">Admissions</h3>
            <div className="grid gap-2 pl-4">
              {admissionsLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-sm hover:text-primary"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="py-2">
            <h3 className="mb-2 text-lg font-semibold">Campus Life</h3>
            <div className="grid gap-2 pl-4">
              {campusLifeLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-sm hover:text-primary"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/contact"
            className={cn(
              "text-lg font-medium transition-colors hover:text-primary",
              pathname === "/contact" && "text-primary"
            )}
          >
            Contact
          </Link>
          <Button className="mt-4" asChild>
            <Link href="/admissions#apply">Apply Now</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
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
