import { ConversionPair } from "@/lib/conversions";

interface ExplanationSectionProps {
  conversion: ConversionPair;
}

export default function ExplanationSection({
  conversion,
}: ExplanationSectionProps) {
  return (
    <div className="bg-background border border-border rounded-xl p-6">
      <h2 className="font-semibold text-lg text-foreground mb-3">
        How to Convert {conversion.fromUnit.name} to {conversion.toUnit.name}
      </h2>
      <p className="text-foreground/70 leading-relaxed">
        {conversion.explanation}
      </p>

      {/* Quick Reference */}
      <div className="mt-6 p-4 bg-muted rounded-lg">
        <h3 className="font-medium text-foreground mb-2">Quick Reference</h3>
        <ul className="space-y-1 text-sm text-foreground/70">
          <li>
            1 {conversion.fromUnit.symbol} ={" "}
            {conversion.convert(1).toFixed(4)} {conversion.toUnit.symbol}
          </li>
          <li>
            1 {conversion.toUnit.symbol} ={" "}
            {conversion.reverseConvert(1).toFixed(4)}{" "}
            {conversion.fromUnit.symbol}
          </li>
        </ul>
      </div>
    </div>
  );
}
