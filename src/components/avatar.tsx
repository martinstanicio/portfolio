import Image, { ImageProps } from "next/image";

import { cn } from "@/lib/utils";

export type Props = React.HTMLAttributes<HTMLDivElement> &
  Pick<ImageProps, "sizes"> & {
    available?: boolean;
  };

export default function Avatar({
  available = false,
  sizes,
  className,
  ...props
}: Props) {
  return (
    <div className={cn("relative aspect-square", className)} {...props}>
      <Image
        src="/profile.jpg"
        alt="Profile picture"
        fill
        sizes={sizes}
        className="overflow-hidden rounded-full object-cover object-center"
      />
      {available && (
        <div className="absolute bottom-3 right-3 aspect-square w-6 rounded-full bg-green-500"></div>
      )}
    </div>
  );
}
