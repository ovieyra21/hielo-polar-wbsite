
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  center = false,
  className 
}: SectionTitleProps) {
  return (
    <div className={cn(
      "mb-12", 
      center && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold text-ice-700 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-ice-600">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-ice-500 mt-4 rounded-full" />
    </div>
  );
}
