import Link from "next/link";
import { Category, getConversionsByCategory } from "@/lib/conversions";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const converters = getConversionsByCategory(category.id);
  const firstConverter = converters[0];

  return (
    <Link
      href={firstConverter ? `/${category.id}/${firstConverter.slug}` : "/"}
      className="group block p-4 sm:p-6 bg-background border border-border rounded-xl hover:border-primary hover:shadow-lg transition-all duration-200 active:scale-[0.98] min-h-[100px]"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <span className="text-3xl sm:text-4xl flex-shrink-0" role="img" aria-hidden="true">
          {category.icon}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">
            {category.name}
          </h3>
          <p className="text-foreground/60 text-sm mt-1 line-clamp-2">
            {category.description}
          </p>
          <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
            {converters.slice(0, 2).map((converter) => (
              <span
                key={converter.slug}
                className="inline-block px-2 py-1 bg-muted text-foreground/70 text-xs rounded-md"
              >
                {converter.fromUnit.symbol} → {converter.toUnit.symbol}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
