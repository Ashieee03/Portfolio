import * as React from "react"
import { cn } from "../../lib/utils"

export interface NavigationMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavigationMenu = React.forwardRef<HTMLDivElement, NavigationMenuProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative z-10", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
NavigationMenu.displayName = "NavigationMenu"

export interface NavigationMenuListProps extends React.HTMLAttributes<HTMLUListElement> {}

const NavigationMenuList = React.forwardRef<HTMLUListElement, NavigationMenuListProps>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(
        "flex flex-1 list-none items-center justify-center gap-1",
        className
      )}
      {...props}
    />
  )
)
NavigationMenuList.displayName = "NavigationMenuList"

export interface NavigationMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {}

const NavigationMenuItem = React.forwardRef<HTMLLIElement, NavigationMenuItemProps>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("relative", className)} {...props} />
  )
)
NavigationMenuItem.displayName = "NavigationMenuItem"

export interface NavigationMenuLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const NavigationMenuLink = React.forwardRef<HTMLAnchorElement, NavigationMenuLinkProps>(
  ({ className, children, ...props }, ref) => (
    <a
      ref={ref}
      className={cn("group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", className)}
      {...props}
    >
      {children}
    </a>
  )
)
NavigationMenuLink.displayName = "NavigationMenuLink"

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} 