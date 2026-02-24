/**
 * Auto-generated logo component: Amp (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AmpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AmpLogo = React.forwardRef<SVGSVGElement, AmpLogoProps>(
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
      <path d="M12 0c6.628 0 12 5.373 12 12s-5.372 12-12 12C5.373 24 0 18.627 0 12S5.373 0 12 0zm-.92 19.278l5.034-8.377a.444.444 0 00.097-.268.455.455 0 00-.455-.455l-2.851.004.924-5.468-.927-.003-5.018 8.367s-.1.183-.1.291c0 .251.204.455.455.455l2.831-.004-.901 5.458z" />
    </svg>
  )
);

AmpLogo.displayName = "AmpLogo";

export const AmpLogoMetadata = {
  id: "amp",
  baseId: "amp",
  variant: "default",
  name: "Amp",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AmpLogo;
