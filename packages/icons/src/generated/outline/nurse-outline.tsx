/**
 * Auto-generated logo component: Nurse Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NurseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NurseOutlineLogo = React.forwardRef<SVGSVGElement, NurseOutlineLogoProps>(
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
      <path d="M12 5c2.941 0 6.685 1.537 9 3l-2 11h-14l-2 -11c2.394 -1.513 6.168 -3.005 9 -3" />
  <path d="M10 12h4" />
  <path d="M12 10v4" />
    </svg>
  )
);

NurseOutlineLogo.displayName = "NurseOutlineLogo";

export const NurseOutlineLogoMetadata = {
  id: "nurse-outline",
  baseId: "nurse-outline",
  variant: "default",
  name: "Nurse Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NurseOutlineLogo;
