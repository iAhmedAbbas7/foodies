// <== IMPORTS ==>
import * as React from "react";
import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

// <== DIALOG COMPONENT ==>
function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  // RETURN THE DIALOG COMPONENT
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

// <== DIALOG TRIGGER COMPONENT ==>
function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  // RETURN THE DIALOG TRIGGER COMPONENT
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

// <== DIALOG PORTAL COMPONENT ==>
function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  // RETURN THE DIALOG PORTAL COMPONENT
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

// <== DIALOG CLOSE COMPONENT ==>
function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  // RETURN THE DIALOG CLOSE COMPONENT
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

// <== DIALOG OVERLAY COMPONENT ==>
function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  // RETURN THE DIALOG OVERLAY COMPONENT
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  );
}

// <== DIALOG CONTENT COMPONENT ==>
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  // RETURN THE DIALOG CONTENT COMPONENT
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            title="Close"
            className="data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5 cursor-pointer"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

// <== DIALOG HEADER COMPONENT ==>
function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  // RETURN THE DIALOG HEADER COMPONENT
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

// <== DIALOG FOOTER COMPONENT ==>
function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  // RETURN THE DIALOG FOOTER COMPONENT
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

// <== DIALOG TITLE COMPONENT ==>
function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  // RETURN THE DIALOG TITLE COMPONENT
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

// <== DIALOG DESCRIPTION COMPONENT ==>
function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  // RETURN THE DIALOG DESCRIPTION COMPONENT
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
