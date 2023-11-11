import { cn } from "@/lib/utils";

export type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Languages({ className, ...props }: Props) {
  const languages = [
    { property: "Spanish", value: "Native proficiency" },
    { property: "English", value: "Bilingual proficiency" },
  ] as const;

  return (
    <section className={cn("space-y-4", className)} {...props}>
      <h2>Languages</h2>

      <ul className="space-y-2">
        {languages.map(({ property, value }, i) => (
          <li key={i} className="flex items-baseline justify-between">
            <span className="rounded bg-primary px-2 text-primary-foreground">
              {property}
            </span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
