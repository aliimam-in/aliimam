/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ExternalLinkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ExternalLink = React.forwardRef<SVGSVGElement, ExternalLinkProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M15 3h6v6" />
  <path d="M10 14 21 3" />
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  )
);
ExternalLink.displayName = "ExternalLink";
export const ExternalLinkMetadata = { 
  id: "external-link", 
  baseId: "external-link", 
  variant: "default", 
  name: "External Link", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ExternalLink;
