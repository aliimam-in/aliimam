/**
 * Auto-generated logo component: Flutter (default)
 * Category: framework
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlutterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Flutter = React.forwardRef<SVGSVGElement, FlutterProps>(
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
      <g clipPath="url(#clip0_2066_393)">
<path d="M13.7266 0L2 11.9621L5.63672 15.5962L20.9258 0H13.7266ZM13.6523 10.9779L7.34375 17.4132L10.9805 21.1987L14.6172 17.489L20.9258 10.9779H13.6523Z" fill="#47C5FB"/>
<path d="M10.9805 21.1988L13.7266 24.0001H20.9258L14.6172 17.489L10.9805 21.1988Z" fill="#00569E"/>
<path d="M7.34375 17.4132L10.9062 13.7792L14.6172 17.489L10.9805 21.1987L7.34375 17.4132Z" fill="#00B5F8"/>
</g>
<defs>
<clipPath id="clip0_2066_393">
<rect width="19" height="24" fill="white" transform="translate(2)"/>
</clipPath>
</defs>
    </svg>
  )
);

Flutter.displayName = "Flutter";

export const FlutterMetadata = {
  id: "Flutter",
  baseId: "Flutter",
  variant: "default",
  name: "Flutter",
  category: "framework",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Flutter;
