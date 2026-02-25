/**
 * Auto-generated logo component: Inbox Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InboxOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InboxOffOutlineLogo = React.forwardRef<SVGSVGElement, InboxOffOutlineLogoProps>(
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
      <path d="M8 4h10a2 2 0 0 1 2 2v10m-.593 3.422a2 2 0 0 1 -1.407 .578h-12a2 2 0 0 1 -2 -2v-12c0 -.554 .225 -1.056 .59 -1.418" />
  <path d="M4 13h3l3 3h4l.987 -.987m2.013 -2.013h3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

InboxOffOutlineLogo.displayName = "InboxOffOutlineLogo";

export const InboxOffOutlineLogoMetadata = {
  id: "inbox-off-outline",
  baseId: "inbox-off-outline",
  variant: "default",
  name: "Inbox Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InboxOffOutlineLogo;
