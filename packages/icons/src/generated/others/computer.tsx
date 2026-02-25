/**
 * Auto-generated logo component: Computer (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ComputerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ComputerLogo = React.forwardRef<SVGSVGElement, ComputerLogoProps>(
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
      <rect width="14" height="8" x="5" y="2" rx="2" />
  <rect width="20" height="8" x="2" y="14" rx="2" />
  <path d="M6 18h2" />
  <path d="M12 18h6" />
    </svg>
  )
);

ComputerLogo.displayName = "ComputerLogo";

export const ComputerLogoMetadata = {
  id: "computer",
  baseId: "computer",
  variant: "default",
  name: "Computer",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ComputerLogo;
