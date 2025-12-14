import Link from "next/link";
import { getRelatedConversions, ConversionPair } from "@/lib/conversions";

interface RelatedConversionsProps {
  currentSlug: string;
}

export default function RelatedConversions({
  currentSlug,
}: RelatedConversionsProps) {
  const related = getRelatedConversions(currentSlug, 4);

  if (related.length === 0) return null;

  return (
    <div className="bg-background border border-border rounded-xl p-6">
      <h2 className="font-semibold text-lg text-foreground mb-4">
        Related Conversions
      </h2>
      <div className="space-y-3">
        {related.map((conversion: ConversionPair) => (
          <Link
            key={conversion.slug}
            href={`/${conversion.category}/${conversion.slug}`}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group"
          >
            <span className="text-foreground/80 group-hover:text-primary transition-colors">
              {conversion.fromUnit.name} to {conversion.toUnit.name}
            </span>
            <span className="text-foreground/40 text-sm">
              {conversion.fromUnit.symbol} → {conversion.toUnit.symbol}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
