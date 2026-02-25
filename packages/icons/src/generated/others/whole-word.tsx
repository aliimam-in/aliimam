/**
 * Auto-generated logo component: Whole Word (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WholeWordLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WholeWordLogo = React.forwardRef<SVGSVGElement, WholeWordLogoProps>(
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
      <circle cx="7" cy="12" r="3" />
  <path d="M10 9v6" />
  <circle cx="17" cy="12" r="3" />
  <path d="M14 7v8" />
  <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
    </svg>
  )
);

WholeWordLogo.displayName = "WholeWordLogo";

export const WholeWordLogoMetadata = {
  id: "whole-word",
  baseId: "whole-word",
  variant: "default",
  name: "Whole Word",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WholeWordLogo;
