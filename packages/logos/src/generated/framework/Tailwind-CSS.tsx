/**
 * Auto-generated logo component: Tailwind CSS (default)
 * Category: framework
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TailwindCSSProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const TailwindCSS = React.forwardRef<SVGSVGElement, TailwindCSSProps>(
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
      <g clipPath="url(#clip0_2066_417)">
<path fillRule="evenodd" clipRule="evenodd" d="M12 4C8.8 4 6.8 5.63636 6 8.90909C7.2 7.27273 8.6 6.65909 10.2 7.06818C11.1129 7.30136 11.7653 7.97909 12.4876 8.72864C13.664 9.95 15.0258 11.3636 18 11.3636C21.2 11.3636 23.2 9.72727 24 6.45455C22.8 8.09091 21.4 8.70455 19.8 8.29545C18.8871 8.06227 18.2347 7.38455 17.5124 6.635C16.336 5.41364 14.9742 4 12 4ZM6 11.3636C2.8 11.3636 0.8 13 0 16.2727C1.2 14.6364 2.6 14.0227 4.2 14.4318C5.11289 14.6655 5.76533 15.3427 6.48756 16.0923C7.664 17.3136 9.02578 18.7273 12 18.7273C15.2 18.7273 17.2 17.0909 18 13.8182C16.8 15.4545 15.4 16.0682 13.8 15.6591C12.8871 15.4259 12.2347 14.7482 11.5124 13.9986C10.336 12.7773 8.97422 11.3636 6 11.3636Z" fill="#38BDF8"/>
</g>
<defs>
<clipPath id="clip0_2066_417">
<rect width="24" height="15" fill="white" transform="translate(0 4)"/>
</clipPath>
</defs>
    </svg>
  )
);

TailwindCSS.displayName = "TailwindCSS";

export const TailwindCSSMetadata = {
  id: "Tailwind-CSS",
  baseId: "Tailwind-CSS",
  variant: "default",
  name: "Tailwind CSS",
  category: "framework",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TailwindCSS;
