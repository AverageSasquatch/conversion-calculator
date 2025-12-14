interface AdPlaceholderProps {
  type: "banner" | "sidebar" | "mobile";
  className?: string;
}

export default function AdPlaceholder({
  type,
  className = "",
}: AdPlaceholderProps) {
  const sizes = {
    banner: "w-full h-24",
    sidebar: "w-full h-64",
    mobile: "w-full h-20",
  };

  return (
    <div
      className={`bg-muted border border-border rounded-lg flex items-center justify-center ${sizes[type]} ${className}`}
      aria-label="Advertisement placeholder"
    >
      <span className="text-foreground/40 text-sm">Ad Space</span>
    </div>
  );
}
