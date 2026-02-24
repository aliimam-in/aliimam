/**
 * Auto-generated logo component: Thumbs Up (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ThumbsUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ThumbsUpLogo = React.forwardRef<SVGSVGElement, ThumbsUpLogoProps>(
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
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
    </svg>
  )
);

ThumbsUpLogo.displayName = "ThumbsUpLogo";

export const ThumbsUpLogoMetadata = {
  id: "thumbs-up",
  baseId: "thumbs-up",
  variant: "default",
  name: "Thumbs Up",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ThumbsUpLogo;
