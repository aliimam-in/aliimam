/**
 * Auto-generated logo component: Web Components (default)
 * Category: library
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WebComponentsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const WebComponents = React.forwardRef<SVGSVGElement, WebComponentsProps>(
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
      <path d="M5.8125 2.25L5.625 2.4375L0.375 11.8125L5.8125 21.375H18.375L21.1875 16.5V16.125L23.8125 11.8125L21 7.3125V6.9375L18.375 2.25H5.8125ZM9.75 7.875H13.6875L16.125 11.8125L13.6875 15.75H9.75L7.5 11.8125L9.75 7.875Z" />
<path d="M22.875 11.8125L20.625 15.75L17.25 11.8125L20.625 7.875L22.875 11.8125Z" fill="#166DA5"/>
<path d="M20.25 16.5L16.6875 12.1875L14.625 15.75L17.8125 20.625L20.25 16.5Z" fill="#8FDB69"/>
<path d="M20.25 7.125L16.6875 11.4375L14.625 7.875L17.8125 3L20.25 7.125Z" fill="#166DA5"/>
<path d="M11.8125 20.625L6.5625 11.8125L11.8125 3H6.1875L1.125 11.8125L6.1875 20.625H11.8125Z" />
<path d="M9.375 7.125L11.8125 3H17.8125L20.25 7.125H9.375ZM14.625 7.875H20.625L22.6875 11.4375H16.6875L14.625 7.875Z" fill="#287BBE"/>
<path d="M9.375 16.5L11.8125 20.625H17.8125L20.25 16.5H9.375ZM14.625 15.75H20.625L22.6875 12.1875H16.6875L14.625 15.75Z" fill="#DDF021"/>
    </svg>
  )
);

WebComponents.displayName = "WebComponents";

export const WebComponentsMetadata = {
  id: "Web-Components",
  baseId: "Web-Components",
  variant: "default",
  name: "Web Components",
  category: "library",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WebComponents;
