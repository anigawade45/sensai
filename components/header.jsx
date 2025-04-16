import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import {
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";
import { checkUser } from "@/lib/checkUser";
import ThemeToggle from "./theme-toggle";

const Header = async() => {
  await checkUser();
  
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 text-foreground">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Sensai Logo"
            width={200}
            height={60}
            className="h-12 py-1 w-auto object-contain invert dark:invert-0"
          />
        </Link>
        {/* Navigation & User Actions */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            {/* Dashboard Link */}
            <Link href={"/dashboard"}>
              <Button variant="outline" className="text-foreground">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:inline">Industry Insights</span>
              </Button>
            </Link>

            <ThemeToggle />
            {/* Growth Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <StarIcon className="h-4 w-4" />
                  <span className="hidden md:inline">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="hover:bg-muted transition-colors" asChild>
                  <Link href={"/resume"} className="flex items-center gap-2 p-2">
                    <FileText className="h-4 w-4" />
                    <span>Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={"/ai-cover-letter"}
                    className="flex items-center gap-2 p-2"
                  >
                    <PenBox className="h-4 w-4" />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={"/interview"}
                    className="flex items-center gap-2 p-2"
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>
          {/* Auth Buttons for Signed-Out Users */}
          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
            <SignUpButton>
              <Button>Sign Up</Button>
            </SignUpButton>
          </SignedOut>
          {/* User Profile Button for Signed-In Users */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
