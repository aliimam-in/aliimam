/**
 * Auto-generated logo component: Goil Dark (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GoilDarkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const GoilDarkLogo = React.forwardRef<SVGSVGElement, GoilDarkLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 386 390"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#fff" fillRule="evenodd" d="M193 0c106.601 0 193 87.307 193 195s-86.399 195-193 195C86.4 390 0 302.693 0 195S86.4 0 193 0m78.135 181.048-33.475 3.592c-4.424.501-7.512 4.261-7.512 8.773 0 21.973-17.531 39.768-39.235 39.768s-39.234-17.795-39.234-39.685c0-4.511-3.089-8.355-7.513-8.856l-33.475-3.592a77 77 0 0 0-.501 8.772c0 45.032 36.23 81.709 80.723 81.709s80.723-36.677 80.723-81.709q0-4.512-.501-8.772m-80.055-70.264c-17.363 0-31.471 14.203-31.471 31.748s14.108 31.748 31.471 31.748 31.471-14.203 31.471-31.748-14.108-31.748-31.471-31.748" clipRule="evenodd" />
    </svg>
  )
);

GoilDarkLogo.displayName = "GoilDarkLogo";

export const GoilDarkLogoMetadata = {
  id: "goil-dark",
  baseId: "goil-dark",
  variant: "default",
  name: "Goil Dark",
  category: "mix",
  tags: [],
  viewBox: "0 0 386 390",
} as const;

export default GoilDarkLogo;
