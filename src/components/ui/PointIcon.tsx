import { Leaf, Sofa, Coffee, Users, HeartHandshake, Armchair } from "lucide-react";

const MAP = {
  leaf: Leaf,
  sofa: Sofa,
  chair: Armchair,
  coffee: Coffee,
  users: Users,
  heart: HeartHandshake,
} as const;

export type PointIconName = keyof typeof MAP;

export function PointIcon({
  name,
  size = 22,
  className,
  strokeWidth = 1.4,
}: {
  name: PointIconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = MAP[name] ?? Leaf;
  return <Cmp size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />;
}
