import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Stripe: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Stripe(
    {
      color = "currentColor",
      fill,
      size = 24,
      strokeWidth,
      strokeLinecap,
      strokeLinejoin,
      strokeDasharray,
      opacity,
      className,
      ...props
    },
    forwardedRef,
  ) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <g clipPath="url(#undefined-clip0_2066_1219)">
          <path
            d="M24 12.1439C24 10.4426 23.1733 9.10009 21.5933 9.10009C20.0066 9.10009 19.0466 10.4426 19.0466 12.1307C19.0466 14.131 20.18 15.1412 21.8066 15.1412C22.6 15.1412 23.2 14.9618 23.6533 14.7093V13.38C23.2 13.606 22.68 13.7456 22.02 13.7456C21.3733 13.7456 20.8 13.5196 20.7267 12.7354H23.9867C23.9867 12.649 24 12.3034 24 12.1439ZM20.7067 11.5126C20.7067 10.7616 21.1667 10.4492 21.5867 10.4492C21.9933 10.4492 22.4267 10.7616 22.4267 11.5126H20.7067ZM16.4734 9.10009C15.82 9.10009 15.4 9.40579 15.1667 9.6185L15.08 9.20645H13.6133V16.9555L15.28 16.6033L15.2867 14.7225C15.5267 14.8953 15.88 15.1412 16.4667 15.1412C17.66 15.1412 18.7467 14.1842 18.7467 12.0775C18.74 10.1501 17.64 9.10009 16.4733 9.10009M16.0733 13.6791C15.68 13.6791 15.4466 13.5396 15.2866 13.3668L15.2799 10.9011C15.4533 10.7084 15.6933 10.5755 16.0733 10.5755C16.68 10.5755 17.1 11.2534 17.1 12.124C17.1 13.0145 16.6866 13.6791 16.0733 13.6791ZM11.32 8.70799L12.9933 8.34911V7L11.32 7.35224V8.70799ZM11.32 9.21308H12.9933V15.0282H11.32V9.21308ZM9.52669 9.70486L9.42 9.21308H7.98V15.0282H9.64669V11.0872C10.04 10.5755 10.7067 10.6686 10.9133 10.7416V9.21308C10.7 9.13332 9.92002 8.9871 9.52669 9.70486ZM6.19331 7.77093L4.56666 8.1165L4.56 13.4399C4.56 14.4235 5.30002 15.1479 6.28669 15.1479C6.83334 15.1479 7.23333 15.0482 7.45331 14.9286V13.5794C7.24003 13.6658 6.18666 13.9715 6.18666 12.9879V10.6286H7.45331V9.21308H6.18666L6.19331 7.77093ZM1.68666 10.9011C1.68666 10.642 1.89998 10.5422 2.25338 10.5422C2.76 10.5422 3.39998 10.6951 3.90666 10.9676V9.40579C3.35334 9.1865 2.80669 9.10009 2.25338 9.10009C0.9 9.10009 0 9.80458 0 10.9809C0 12.8151 2.53331 12.5228 2.53331 13.3136C2.53331 13.6193 2.26669 13.719 1.89333 13.719C1.34002 13.719 0.633328 13.493 0.0733125 13.1873V14.7691C0.693328 15.0349 1.32 15.1479 1.89333 15.1479C3.27998 15.1479 4.23333 14.4634 4.23333 13.2737C4.22667 11.2933 1.68666 11.6455 1.68666 10.9011Z"
            fill="#635bff"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_1219">
            <path fill="#fff" transform="translate(0 7)" d="M0 0H24V10H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Stripe.displayName = "Stripe";

Stripe.metadata = {
  name: "Stripe",
  category: "icon/payment",
  tags: ["stripe", "icon"],
  description: "Stripe icon from icon/payment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Stripe;
