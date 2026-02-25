/**
 * Auto-generated logo component: Tallymark 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Tallymark3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Tallymark3OutlineLogo = React.forwardRef<SVGSVGElement, Tallymark3OutlineLogoProps>(
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
      <path d="M8 5l0 14" />
  <path d="M12 5l0 14" />
  <path d="M16 5l0 14" />
    </svg>
  )
);

Tallymark3OutlineLogo.displayName = "Tallymark3OutlineLogo";

export const Tallymark3OutlineLogoMetadata = {
  id: "tallymark-3-outline",
  baseId: "tallymark-3-outline",
  variant: "default",
  name: "Tallymark 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Tallymark3OutlineLogo;
