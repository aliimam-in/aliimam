/**
 * Auto-generated logo component: XAI Grok (default)
 * Category: ai
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface XAIGrokProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const XAIGrok = React.forwardRef<SVGSVGElement, XAIGrokProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 841.89 595.28"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path  d="m557.09 211.99 8.31 326.37h66.56l8.32-445.18zM640.28 56.91H538.72L379.35 284.53l50.78 72.52zM201.61 538.36h101.56l50.79-72.52-50.79-72.53zM201.61 211.99l228.52 326.37h101.56L303.17 211.99z"/>
    </svg>
  )
);

XAIGrok.displayName = "XAIGrok";

export const XAIGrokMetadata = {
  id: "xAI-Grok",
  baseId: "xAI-Grok",
  variant: "default",
  name: "XAI Grok",
  category: "ai",
  tags: [],
  viewBox: "0 0 841.89 595.28",
} as const;

export default XAIGrok;
