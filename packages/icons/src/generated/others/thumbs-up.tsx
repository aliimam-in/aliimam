/**
 * Auto-generated logo component: Thumbs Up (default)
 * Category: others
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
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
  <path d="M7 10v12" />
    </svg>
  )
);

ThumbsUpLogo.displayName = "ThumbsUpLogo";

export const ThumbsUpLogoMetadata = {
  id: "thumbs-up",
  baseId: "thumbs-up",
  variant: "default",
  name: "Thumbs Up",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ThumbsUpLogo;
