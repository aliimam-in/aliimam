/**
 * Auto-generated logo component: Ruler Measure 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RulerMeasure2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RulerMeasure2OutlineLogo = React.forwardRef<SVGSVGElement, RulerMeasure2OutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 19.875c0 .621 -.512 1.125 -1.143 1.125h-5.714a1.134 1.134 0 0 1 -1.143 -1.125v-15.875a1 1 0 0 1 1 -1h5.857c.631 0 1.143 .504 1.143 1.125l0 15.75" />
  <path d="M12 9h-2" />
  <path d="M12 6h-3" />
  <path d="M12 12h-3" />
  <path d="M12 18h-3" />
  <path d="M12 15h-2" />
  <path d="M21 3h-4" />
  <path d="M19 3v18" />
  <path d="M21 21h-4" />
    </svg>
  )
);

RulerMeasure2OutlineLogo.displayName = "RulerMeasure2OutlineLogo";

export const RulerMeasure2OutlineLogoMetadata = {
  id: "ruler-measure-2-outline",
  baseId: "ruler-measure-2-outline",
  variant: "default",
  name: "Ruler Measure 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RulerMeasure2OutlineLogo;
