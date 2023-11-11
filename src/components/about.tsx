import { cn } from "@/lib/utils";

export type Props = React.HTMLAttributes<HTMLDivElement>;

export default function About({ className, ...props }: Props) {
  const birthDate = new Date("2006-05-28T16:39-03:00");
  const currentDate = new Date();
  const secondsInAYear = 1000 * 60 * 60 * 24 * 365.25;
  const age = Math.floor(
    (currentDate.getTime() - birthDate.getTime()) / secondsInAYear,
  );

  const about = [
    { property: "Age", value: age },
    { property: "Residence", value: "Argentina" },
    { property: "CUIT", value: "20-47162695-4" },
  ] as const;

  return (
    <section className={cn("space-y-4", className)} {...props}>
      <h2>About</h2>

      <ul className="space-y-2">
        {about.map(({ property, value }, i) => (
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
