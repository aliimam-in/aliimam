/**
 * Auto-generated logo component: Hand Helping (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HandHelpingLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HandHelpingLogo = React.forwardRef<SVGSVGElement, HandHelpingLogoProps>(
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
      <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
  <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
  <path d="m2 13 6 6" />
    </svg>
  )
);

HandHelpingLogo.displayName = "HandHelpingLogo";

export const HandHelpingLogoMetadata = {
  id: "hand-helping",
  baseId: "hand-helping",
  variant: "default",
  name: "Hand Helping",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HandHelpingLogo;
