import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const backgroundVariants = cva(
  "rounded-full flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-sky-100",
        sucsess: "bg-emerald-100",
      },
      iconVarients: {
        default: "text-sky-700",
        sucsess: "text-emerald-700",
      },
      size: {
        default: "p-2",
        sm: "p-1",
      },
    },
    defaultVariants: {
      variant: "default",

      size: "default",
    },
  }
);

const iconVarients = cva("", {
  variants: {
    variant: {
      default: "text-sky-700",
      sucsess: "text-emerald-700",
    },
    size: {
      default: "w-8 h-8",
      sm: "w-4 h-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type backgroundVariantsProps = VariantProps<typeof backgroundVariants>;
type iconVarientsProps = VariantProps<typeof iconVarients>;

interface IconBadgeProps extends backgroundVariantsProps, iconVarientsProps {
  icon: LucideIcon;
}

export const IconBadge = ({ icon: Icon, variant, size }: IconBadgeProps) => {
  return (
    <div className={cn(backgroundVariants({ variant, size }))}>
      <Icon className={cn(iconVarients({ variant, size }))} />
    </div>
  );
};
