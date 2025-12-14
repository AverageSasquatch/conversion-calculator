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
    <div className="bg-background border border-border rounded-xl p-4 sm:p-6">
      <h2 className="font-semibold text-base sm:text-lg text-foreground mb-3 sm:mb-4">
        Related Conversions
      </h2>
      <div className="space-y-1 sm:space-y-2">
        {related.map((conversion: ConversionPair) => (
          <Link
            key={conversion.slug}
            href={`/${conversion.category}/${conversion.slug}`}
            className="flex items-center justify-between p-3 min-h-[48px] rounded-lg hover:bg-muted active:bg-muted/80 transition-colors group"
          >
            <span className="text-sm sm:text-base text-foreground/80 group-hover:text-primary transition-colors">
              {conversion.fromUnit.name} to {conversion.toUnit.name}
            </span>
            <span className="text-foreground/40 text-xs sm:text-sm ml-2 flex-shrink-0">
              {conversion.fromUnit.symbol} → {conversion.toUnit.symbol}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
