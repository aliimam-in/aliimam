/**
 * Auto-generated logo component: Reply (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReplyLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ReplyLogo = React.forwardRef<SVGSVGElement, ReplyLogoProps>(
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
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
  <path d="m9 17-5-5 5-5" />
    </svg>
  )
);

ReplyLogo.displayName = "ReplyLogo";

export const ReplyLogoMetadata = {
  id: "reply",
  baseId: "reply",
  variant: "default",
  name: "Reply",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ReplyLogo;
