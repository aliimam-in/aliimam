/**
 * Auto-generated logo component: PerplexityAI (default)
 * Category: ai
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PerplexityAIProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const PerplexityAI = React.forwardRef<SVGSVGElement, PerplexityAIProps>(
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
      <path d="M12 2.25V21.75M6.86501 8.2865V3.2915L12 8.2865M12 8.2865L6.86501 13.505V20.7085L12 15.5365M12 8.2865L17.135 3.2915V8.2865" stroke="#20808D" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.865 15.698H4.72V8.2865H19.28V15.698H17.135" stroke="#20808D" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8.2865L17.135 13.505V20.7085L12 15.5365" stroke="#20808D" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

PerplexityAI.displayName = "PerplexityAI";

export const PerplexityAIMetadata = {
  id: "PerplexityAI",
  baseId: "PerplexityAI",
  variant: "default",
  name: "PerplexityAI",
  category: "ai",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PerplexityAI;
