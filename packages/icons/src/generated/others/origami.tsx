/**
 * Auto-generated logo component: Origami (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OrigamiLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const OrigamiLogo = React.forwardRef<SVGSVGElement, OrigamiLogoProps>(
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
      <path d="M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025" />
  <path d="m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009" />
  <path d="m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027" />
    </svg>
  )
);

OrigamiLogo.displayName = "OrigamiLogo";

export const OrigamiLogoMetadata = {
  id: "origami",
  baseId: "origami",
  variant: "default",
  name: "Origami",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default OrigamiLogo;
