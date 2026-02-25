/**
 * Auto-generated logo component: Trello (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrelloProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Trello = React.forwardRef<SVGSVGElement, TrelloProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
            <stop stopColor="#0091E6" offset="0%"></stop>
            <stop stopColor="#0079BF" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g>
        <g>
            <rect fill="url(#linearGradient-1)" x="0" y="0" width="256" height="256" rx="25"></rect>
            <rect fill="#FFFFFF" x="144.64" y="33.28" width="78.08" height="112" rx="12"></rect>
            <rect fill="#FFFFFF" x="33.28" y="33.28" width="78.08" height="176" rx="12"></rect>
        </g>
    </g>
    </svg>
  )
);

Trello.displayName = "Trello";

export const TrelloMetadata = {
  id: "trello",
  baseId: "trello",
  variant: "default",
  name: "Trello",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default Trello;
