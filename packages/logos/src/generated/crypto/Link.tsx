/**
 * Auto-generated logo component: Link (default)
 * Category: crypto
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LinkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Link = React.forwardRef<SVGSVGElement, LinkProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g clipPath="url(#clip0_2062_2928)">
<path d="M12 24C18.6275 24 24 18.6275 24 12C24 5.37258 18.6275 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6275 5.37258 24 12 24Z" fill="#375BD2"/>
<path d="M12 3L4.20569 7.5V16.5L12 21L19.7942 16.5V7.5L12 3ZM16.4912 14.5932L12 17.186L7.50869 14.5932V9.4068L12 6.8139L16.4912 9.4068V14.5932Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2062_2928">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

Link.displayName = "Link";

export const LinkMetadata = {
  id: "Link",
  baseId: "Link",
  variant: "default",
  name: "Link",
  category: "crypto",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Link;
