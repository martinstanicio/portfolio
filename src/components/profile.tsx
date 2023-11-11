import { cn } from "@/lib/utils";

import Avatar from "./avatar";

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  available?: boolean;
};

export default function Profile({
  available = false,
  className,
  ...props
}: Props) {
  return (
    <section
      className={cn("flex flex-col items-center gap-4 text-center", className)}
      {...props}
    >
      <Avatar available className="w-40" sizes="160px" />

      <div>
        <p className="text-lg font-bold text-foreground-contrast">
          Martín Stanicio
        </p>
        <p>Web Developer</p>
      </div>
    </section>
  );
}
