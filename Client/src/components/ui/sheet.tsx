// <== IMPORTS ==>
import * as React from "react";
import { cn } from "@/lib/utils";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

// <== SHEET COMPONENT ==>
function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  // RETURN THE SHEET COMPONENT
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

// <== SHEET TRIGGER COMPONENT ==>
function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  // RETURN THE SHEET TRIGGER COMPONENT
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

// <== SHEET CLOSE COMPONENT ==>
function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  // RETURN THE SHEET CLOSE COMPONENT
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

// <== SHEET PORTAL COMPONENT ==>
function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  // RETURN THE SHEET PORTAL COMPONENT
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

// <== SHEET OVERLAY COMPONENT ==>
function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  // RETURN THE SHEET OVERLAY COMPONENT
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  );
}

// <== SHEET CONTENT COMPONENT ==>
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  // RETURN THE SHEET CONTENT COMPONENT
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

// <== SHEET HEADER COMPONENT ==>
function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  // RETURN THE SHEET HEADER COMPONENT
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

// <== SHEET FOOTER COMPONENT ==>
function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  // RETURN THE SHEET FOOTER COMPONENT
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

// <== SHEET TITLE COMPONENT ==>
function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  // RETURN THE SHEET TITLE COMPONENT
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}

// <== SHEET DESCRIPTION COMPONENT ==>
function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  // RETURN THE SHEET DESCRIPTION COMPONENT
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
