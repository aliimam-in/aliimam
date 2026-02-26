/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayoutTemplateProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayoutTemplate = React.forwardRef<SVGSVGElement, LayoutTemplateProps>(
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
      <rect width="18" height="7" x="3" y="3" rx="1" />
  <rect width="9" height="7" x="3" y="14" rx="1" />
  <rect width="5" height="7" x="16" y="14" rx="1" />
    </svg>
  )
);
LayoutTemplate.displayName = "LayoutTemplate";
export const LayoutTemplateMetadata = { 
  id: "layout-template", 
  baseId: "layout-template", 
  variant: "default", 
  name: "Layout Template", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LayoutTemplate;
