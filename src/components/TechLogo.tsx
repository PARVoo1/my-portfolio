interface Props {
  slug: string;
  name: string;
  color?: string;
  size?: number;
}

// Uses simpleicons CDN — colored brand SVGs
export function TechLogo({ slug, name, color, size = 28 }: Props) {
  const src = `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ""}`;
  return (
    <div
      className="grid place-items-center rounded-xl bg-background border border-border shrink-0"
      style={{ width: size + 16, height: size + 16 }}
      title={name}
    >
      <img src={src} alt={name} width={size} height={size} loading="lazy" />
    </div>
  );
}
