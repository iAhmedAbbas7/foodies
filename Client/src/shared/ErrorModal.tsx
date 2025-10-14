// <== IMPORTS ==>
import WARNING from "../assets/images/WARNING.png";
import { Lock, Mail, Phone, User, X as XIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// <== PROPS TYPE ==>
type ErrorModalProps = {
  open: boolean;
  title?: string;
  errors: { key: string; message: string }[];
  description?: string;
  onOpenChange: (open: boolean) => void;
};

// <== ERROR MODAL COMPONENT ==>
const ErrorModal = ({
  open,
  errors,
  description,
  onOpenChange,
  title = "Please fix the following:",
}: ErrorModalProps) => {
  // MAP FIELD KEYS TO ICONS
  const renderIcon = (key: string) => {
    switch (key) {
      case "fullName":
        return <User size={22} className="text-purple" />;
      case "email":
        return <Mail size={22} className="text-purple" />;
      case "contact":
        return <Phone size={22} className="text-purple" />;
      case "password":
        return <Lock size={22} className="text-purple" />;
      default:
        return <XIcon size={22} className="text-purple" />;
    }
  };
  return (
    // ERROR MODAL MAIN WRAPPER
    <>
      {/* ERROR MODAL CONTENT WRAPPER */}
      <Dialog open={open} onOpenChange={onOpenChange}>
        {/* DIALOG CONTENT WRAPPER */}
        <DialogContent>
          {/* DIALOG HEADER */}
          <DialogHeader>
            {/* ICON */}
            <div className="w-full flex items-center justify-center">
              <img
                src={WARNING}
                alt="Warning Icon"
                className="w-[64px] h-[64px]"
              />
            </div>
            {/* DIALOG TITLE */}
            <DialogTitle className="w-full text-center font-semibold text-purple text-[1.25rem]">
              {title}
            </DialogTitle>
            {description ? (
              <DialogDescription className="w-full text-sm text-gray-500 text-center">
                {description}
              </DialogDescription>
            ) : null}
          </DialogHeader>
          {/* ERRORS LIST */}
          {errors.length > 0 && (
            <ul className="flex flex-col gap-2 text-gray-500 text-sm">
              {errors.map((err, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 w-full  bg-gray-200 p-2 rounded-md"
                >
                  <span className="mt-[2px]">{renderIcon(err.key)}</span>
                  <span>{err.message}</span>
                </li>
              ))}
            </ul>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ErrorModal;
