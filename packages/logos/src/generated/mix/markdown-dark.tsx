/**
 * Auto-generated logo component: Markdown Dark (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MarkdownDarkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MarkdownDarkLogo = React.forwardRef<SVGSVGElement, MarkdownDarkLogoProps>(
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
      <path fill="none" stroke="#FFF" strokeWidth="10" d="M15 5h178a10 10 0 0 1 10 10v98a10 10 0 0 1-10 10H15a10 10 0 0 1-10-10V15A10 10 0 0 1 15 5z" /><path fill="#FFF" d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39H30zm125 0-30-33h20V30h20v35h20l-30 33z" />
    </svg>
  )
);

MarkdownDarkLogo.displayName = "MarkdownDarkLogo";

export const MarkdownDarkLogoMetadata = {
  id: "markdown-dark",
  baseId: "markdown-dark",
  variant: "default",
  name: "Markdown Dark",
  category: "mix",
  tags: [],
  viewBox: "0 0 208 128",
} as const;

export default MarkdownDarkLogo;
