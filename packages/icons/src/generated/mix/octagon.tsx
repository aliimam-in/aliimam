/**
 * Auto-generated logo component: Octagon (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixOctagonLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixOctagonLogo = React.forwardRef<SVGSVGElement, MixOctagonLogoProps>(
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
      <path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />
    </svg>
  )
);

MixOctagonLogo.displayName = "MixOctagonLogo";

export const MixOctagonLogoMetadata = {
  id: "octagon",
  baseId: "octagon",
  variant: "default",
  name: "Octagon",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixOctagonLogo;
