/**
 * Auto-generated logo component: Markdown Light (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MarkdownLightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MarkdownLightLogo = React.forwardRef<SVGSVGElement, MarkdownLightLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 208 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#000"><path fillRule="evenodd" d="M15 10a5 5 0 0 0-5 5v98a5 5 0 0 0 5 5h178a5 5 0 0 0 5-5V15a5 5 0 0 0-5-5zM0 15A15 15 0 0 1 15 0h178a15 15 0 0 1 15 15v98a15 15 0 0 1-15 15H15a15 15 0 0 1-15-15z" clipRule="evenodd" /><path d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39zm125 0-30-33h20V30h20v35h20z" /></g>
    </svg>
  )
);

MarkdownLightLogo.displayName = "MarkdownLightLogo";

export const MarkdownLightLogoMetadata = {
  id: "markdown-light",
  baseId: "markdown-light",
  variant: "default",
  name: "Markdown Light",
  category: "mix",
  tags: [],
  viewBox: "0 0 208 128",
} as const;

export default MarkdownLightLogo;
