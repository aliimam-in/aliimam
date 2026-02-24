/**
 * Auto-generated logo component: Ahrefs (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AhrefsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AhrefsLogo = React.forwardRef<SVGSVGElement, AhrefsLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m24 8v24h64v16l-26.104 0.456c-35.096 3.256-45.896 11.624-45.896 36.504v6.512c0 19.064 14.328 28.528 32 28.528 7.984 0 16.32-1.56 25.04-5.976l14.96-6.024v12h24v-112zm64 76-18.112 7.472c-6.296 3.488-12.832 5.344-17.92 5.344-6.288 0-11.968-1.136-11.968-8.816v-5.12c0.48-8.136 7.376-11.176 26.256-13.032l21.744-1.848z" fill="#f80" />
    </svg>
  )
);

AhrefsLogo.displayName = "AhrefsLogo";

export const AhrefsLogoMetadata = {
  id: "ahrefs",
  baseId: "ahrefs",
  variant: "default",
  name: "Ahrefs",
  category: "mix",
  tags: [],
  viewBox: "0 0 128 128",
} as const;

export default AhrefsLogo;
