/**
 * Auto-generated logo component: Html5 (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Html5LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Html5Logo = React.forwardRef<SVGSVGElement, Html5LogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 452 520"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
  <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
  <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z" />
  <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z" />
    </svg>
  )
);

Html5Logo.displayName = "Html5Logo";

export const Html5LogoMetadata = {
  id: "html5",
  baseId: "html5",
  variant: "default",
  name: "Html5",
  category: "mix",
  tags: [],
  viewBox: "0 0 452 520",
} as const;

export default Html5Logo;
