/**
 * Auto-generated logo component: Olympics Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OlympicsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const OlympicsOffOutlineLogo = React.forwardRef<SVGSVGElement, OlympicsOffOutlineLogoProps>(
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
      <path d="M6 6a3 3 0 1 0 3 3" />
  <path d="M15 9a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M9 9a3 3 0 0 0 3 3m2.566 -1.445a3 3 0 0 0 -4.135 -4.113" />
  <path d="M6 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M12.878 12.88a3 3 0 0 0 4.239 4.247m.586 -3.431a3.012 3.012 0 0 0 -1.43 -1.414" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

OlympicsOffOutlineLogo.displayName = "OlympicsOffOutlineLogo";

export const OlympicsOffOutlineLogoMetadata = {
  id: "olympics-off-outline",
  baseId: "olympics-off-outline",
  variant: "default",
  name: "Olympics Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default OlympicsOffOutlineLogo;
