/**
 * Auto-generated logo component: Anthropic (white)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AnthropicWhiteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AnthropicWhite = React.forwardRef<SVGSVGElement, AnthropicWhiteProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
    </svg>
  )
);

AnthropicWhite.displayName = "AnthropicWhite";

export const AnthropicWhiteMetadata = {
  id: "anthropic_white",
  baseId: "anthropic",
  variant: "white",
  name: "Anthropic",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AnthropicWhite;
