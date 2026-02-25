/**
 * Auto-generated logo component: Tallymark 1 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Tallymark1OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Tallymark1OutlineLogo = React.forwardRef<SVGSVGElement, Tallymark1OutlineLogoProps>(
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
      <path d="M12 5l0 14" />
    </svg>
  )
);

Tallymark1OutlineLogo.displayName = "Tallymark1OutlineLogo";

export const Tallymark1OutlineLogoMetadata = {
  id: "tallymark-1-outline",
  baseId: "tallymark-1-outline",
  variant: "default",
  name: "Tallymark 1 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Tallymark1OutlineLogo;
