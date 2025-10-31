import { ShoppingCart, Search, GraduationCap, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "wouter";
import { useAuth } from "@/hooks/useAuth";

interface HeaderProps {
  cartCount?: number;
  onCartClick?: () => void;
  onSearchChange?: (value: string) => void;
}

export default function Header({ cartCount = 0, onCartClick, onSearchChange }: HeaderProps) {
  const { user, isAuthenticated } = useAuth();

  const handleLogout = () => {
    window.location.href = "/api/logout";
  };

  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  const getUserInitials = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    }
    if (user?.email) {
      return user.email[0].toUpperCase();
    }
    return "U";
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/">
            <a className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 -ml-2 py-1" data-testid="link-home">
              <GraduationCap className="h-8 w-8 text-primary" data-testid="icon-logo" />
              <span className="text-xl font-bold" data-testid="text-brand">EduTech Store</span>
            </a>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link href="/software">
              <a>
                <Button variant="ghost" data-testid="link-software">
                  Software
                </Button>
              </a>
            </Link>
            <Link href="/hardware">
              <a>
                <Button variant="ghost" data-testid="link-hardware">
                  Hardware
                </Button>
              </a>
            </Link>
          </nav>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10"
                onChange={(e) => onSearchChange?.(e.target.value)}
                data-testid="input-search"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={onCartClick}
              data-testid="button-cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge
                  className="absolute -top-1 -right-1 h-5 min-w-5 flex items-center justify-center p-1 text-xs"
                  variant="destructive"
                  data-testid="badge-cart-count"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>

            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full" data-testid="button-user-menu">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={user.profileImageUrl || undefined} alt={user.email || "User"} style={{ objectFit: "cover" }} />
                      <AvatarFallback>{getUserInitials()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel data-testid="text-user-email">
                    {user.email || "User Account"}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} data-testid="button-logout">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" onClick={handleLogin} data-testid="button-login">
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
