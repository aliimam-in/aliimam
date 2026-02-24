/**
 * Auto-generated logo component: Trello (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrelloLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrelloLogo = React.forwardRef<SVGSVGElement, TrelloLogoProps>(
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><rect x="7" y="7" width="3" height="9"/><rect x="14" y="7" width="3" height="5"/>
    </svg>
  )
);

TrelloLogo.displayName = "TrelloLogo";

export const TrelloLogoMetadata = {
  id: "trello",
  baseId: "trello",
  variant: "default",
  name: "Trello",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrelloLogo;
