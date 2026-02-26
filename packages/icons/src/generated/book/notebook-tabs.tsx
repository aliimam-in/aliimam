/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NotebookTabsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NotebookTabs = React.forwardRef<SVGSVGElement, NotebookTabsProps>(
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
      <path d="M2 6h4" />
  <path d="M2 10h4" />
  <path d="M2 14h4" />
  <path d="M2 18h4" />
  <rect width="16" height="20" x="4" y="2" rx="2" />
  <path d="M15 2v20" />
  <path d="M15 7h5" />
  <path d="M15 12h5" />
  <path d="M15 17h5" />
    </svg>
  )
);
NotebookTabs.displayName = "NotebookTabs";
export const NotebookTabsMetadata = { 
  id: "notebook-tabs", 
  baseId: "notebook-tabs", 
  variant: "default", 
  name: "Notebook Tabs", 
  category: "book", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default NotebookTabs;
