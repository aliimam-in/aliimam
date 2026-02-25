/**
 * Auto-generated logo component: File Dollar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileDollarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileDollarOutlineLogo = React.forwardRef<SVGSVGElement, FileDollarOutlineLogoProps>(
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
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
  <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M12 17v1m0 -8v1" />
    </svg>
  )
);

FileDollarOutlineLogo.displayName = "FileDollarOutlineLogo";

export const FileDollarOutlineLogoMetadata = {
  id: "file-dollar-outline",
  baseId: "file-dollar-outline",
  variant: "default",
  name: "File Dollar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileDollarOutlineLogo;
