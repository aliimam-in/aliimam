/**
 * Auto-generated logo component: Star Off (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StarOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StarOffLogo = React.forwardRef<SVGSVGElement, StarOffLogoProps>(
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
      <path d="m10.344 4.688 1.181-2.393a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.237 3.152" />
  <path d="m17.945 17.945.43 2.505a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a8 8 0 0 0 .4-.099" />
  <path d="m2 2 20 20" />
    </svg>
  )
);

StarOffLogo.displayName = "StarOffLogo";

export const StarOffLogoMetadata = {
  id: "star-off",
  baseId: "star-off",
  variant: "default",
  name: "Star Off",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StarOffLogo;
