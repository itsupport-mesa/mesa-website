import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface DonateButtonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function DonateButton({ size = "md", className }: DonateButtonProps) {
  // TODO: Get PayPal URL from site settings/database
  const donateUrl = "https://www.paypal.com/donate/?hosted_button_id=PLACEHOLDER";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <a
      href={donateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-md bg-mesa-gold font-semibold text-mesa-green-900 transition-colors hover:bg-yellow-500",
        sizeClasses[size],
        className
      )}
    >
      <Heart className="h-4 w-4" aria-hidden="true" />
      Donate Now
    </a>
  );
}
