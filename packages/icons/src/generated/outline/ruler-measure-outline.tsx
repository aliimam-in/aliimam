/**
 * Auto-generated logo component: Ruler Measure Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RulerMeasureOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RulerMeasureOutlineLogo = React.forwardRef<SVGSVGElement, RulerMeasureOutlineLogoProps>(
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
      <path d="M19.875 12c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75" />
  <path d="M9 12v2" />
  <path d="M6 12v3" />
  <path d="M12 12v3" />
  <path d="M18 12v3" />
  <path d="M15 12v2" />
  <path d="M3 3v4" />
  <path d="M3 5h18" />
  <path d="M21 3v4" />
    </svg>
  )
);

RulerMeasureOutlineLogo.displayName = "RulerMeasureOutlineLogo";

export const RulerMeasureOutlineLogoMetadata = {
  id: "ruler-measure-outline",
  baseId: "ruler-measure-outline",
  variant: "default",
  name: "Ruler Measure Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RulerMeasureOutlineLogo;
