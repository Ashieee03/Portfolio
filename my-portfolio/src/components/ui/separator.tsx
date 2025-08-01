import * as React from "react"
import { cn } from "../../lib/utils"

export interface SeparatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
}

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) {
  const ariaOrientation = orientation === "vertical" ? "vertical" : undefined
  const separatorProps = decorative
    ? { "aria-hidden": true }
    : { "aria-orientation": ariaOrientation, role: "separator" }

  return (
    <div
      {...separatorProps}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
}

export { Separator } 