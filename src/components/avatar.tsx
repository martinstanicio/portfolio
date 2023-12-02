import profile from "@/assets/profile.jpg";
import { cn } from "@/lib/utils";

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  available?: boolean;
};

export default function Avatar({
  available = false,
  className,
  ...props
}: Props) {
  return (
    <div className={cn("relative aspect-square", className)} {...props}>
      <img
        src={profile.src}
        alt="Profile picture"
        className="absolute overflow-hidden rounded-full object-cover object-center"
      />
      {available && (
        <div className="absolute bottom-3 right-3 aspect-square w-6 rounded-full bg-green-500"></div>
      )}
    </div>
  );
}
