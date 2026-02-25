/**
 * Auto-generated logo component: Church (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChurchLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChurchLogo = React.forwardRef<SVGSVGElement, ChurchLogoProps>(
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
      <path d="M10 9h4" />
  <path d="M12 7v5" />
  <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
  <path d="m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9" />
  <path d="M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14" />
    </svg>
  )
);

ChurchLogo.displayName = "ChurchLogo";

export const ChurchLogoMetadata = {
  id: "church",
  baseId: "church",
  variant: "default",
  name: "Church",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChurchLogo;
