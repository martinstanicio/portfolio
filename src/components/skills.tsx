import { cn } from "@/lib/utils";

import { Badge } from "./ui/badge";

export type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Skills({ className, ...props }: Props) {
  const skills = [
    "JavaScript",
    "Python",
    "SEO",
    "Git",
    "UI Design",
    "CSS",
    "MySQL",
    "React",
  ] as const;

  return (
    <section className={cn("space-y-4", className)} {...props}>
      <h2>Top Skills</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <li key={i}>
            <Badge variant={i < 3 ? "default" : "outline"}>{skill}</Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
