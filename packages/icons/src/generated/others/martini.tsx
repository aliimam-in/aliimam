/**
 * Auto-generated logo component: Martini (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MartiniLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MartiniLogo = React.forwardRef<SVGSVGElement, MartiniLogoProps>(
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
      <path d="M8 22h8" />
  <path d="M12 11v11" />
  <path d="m19 3-7 8-7-8Z" />
    </svg>
  )
);

MartiniLogo.displayName = "MartiniLogo";

export const MartiniLogoMetadata = {
  id: "martini",
  baseId: "martini",
  variant: "default",
  name: "Martini",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MartiniLogo;
