/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ContainerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Container = React.forwardRef<SVGSVGElement, ContainerProps>(
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
      <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
  <path d="M10 21.9V14L2.1 9.1" />
  <path d="m10 14 11.9-6.9" />
  <path d="M14 19.8v-8.1" />
  <path d="M18 17.5V9.4" />
    </svg>
  )
);
Container.displayName = "Container";
export const ContainerMetadata = { 
  id: "container", 
  baseId: "container", 
  variant: "default", 
  name: "Container", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Container;
