import React, { useState } from "react";

interface RatingProps {
  className?: string;
  count: number;
  value: number;
  color?: string;
  hoverColor?: string;
  activeColor?: string;
  size?: number;
  edit?: boolean;
  isHalf?: boolean;
  onChange?: (value: number) => void;
  emptyIcon?: React.ReactElement;
  halfIcon?: React.ReactElement;
  fullIcon?: React.ReactElement;
}

interface IconProps {
  size?: number;
  color?: string;
}

const FullStar = ({ size = 24, color = "#000000" }: IconProps) => {
  return (
    <div style={{ color: color }}>
      {/* <svg height={size} viewBox="0 0 24 24">
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          fill="currentColor"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg> */}
      <svg
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.00054 1.50109L6.76054 6.24109L1.76054 7.00109C0.920537 7.08109 0.500537 8.34109 1.16054 9.00109L4.76054 12.6611L3.92054 17.9211C3.76054 18.8411 4.76054 19.5011 5.50054 19.0811L10.0005 16.7411L14.5005 19.0811C15.3405 19.5011 16.2605 18.8411 16.0805 17.9211L15.2605 12.6611L18.8405 9.00109C19.5005 8.34109 19.0805 7.16109 18.2605 7.00109L13.2605 6.24109L11.0005 1.50109C10.5805 0.661094 9.42054 0.661094 9.00054 1.50109Z"
          fill="currentColor"
          stroke="currentColor"
        />
      </svg>
    </div>
  );
};

const HalfStar = ({ size = 24, color = "#000000" }: IconProps) => {
  return (
    <div style={{ color: color }}>
      {/* <svg height={size} viewBox="0 0 24 24">
        <path
          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
          fill="currentColor"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg> */}

      <svg
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_3_9)">
          <path
            d="M9.0146 1.51L6.7746 6.25L1.7746 7.01C0.934597 7.09 0.514597 8.35 1.1746 9.01L4.7746 12.67L3.9346 17.93C3.7746 18.85 4.7746 19.51 5.5146 19.09L10.0146 16.75V1.24611C10.0146 20.38 10.0146 -0.517988 10.0146 1.24611C10.0146 0.794062 10.0146 1.24611 10.0146 0.88C9.61958 0.880007 9.2246 1.09001 9.0146 1.51Z"
            fill="currentColor"
          />
          <path
            d="M9.44727 1.72461C9.68145 1.25624 10.3085 1.25362 10.5479 1.71582H10.5488L12.8096 6.45605L12.9229 6.69531L13.1855 6.73535L18.165 7.49121V7.49219C18.3566 7.52973 18.5461 7.70068 18.6289 7.96387C18.7089 8.21858 18.6611 8.47347 18.4873 8.64746L18.4834 8.65137L14.9033 12.3115L14.7275 12.4902L14.7666 12.7383L15.5869 17.998L15.5879 18.0078L15.5898 18.0176C15.6837 18.4991 15.2206 18.8823 14.7236 18.6338L10.2314 16.2979L10.001 16.1777L9.76953 16.2979L5.26953 18.6377L5.26172 18.6416L5.25391 18.6465C4.88265 18.8572 4.32527 18.5121 4.41309 18.0068L4.41406 18L5.25391 12.7402L5.29395 12.4902L5.11719 12.3105L1.5166 8.65039L1.51367 8.64746C1.34351 8.47708 1.29015 8.20381 1.375 7.93262C1.46209 7.65447 1.6465 7.51454 1.80762 7.49902L1.82227 7.49707L1.83594 7.49512L6.83594 6.73535L7.09863 6.69531L7.21289 6.45508L9.44727 1.72461Z"
            stroke="currentColor"
          />
        </g>
        {/* <defs>
          <clipPath id="clip0_3_9">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs> */}
      </svg>
    </div>
  );
};

const EmptyStar = ({ size = 24, color = "#000000" }: IconProps) => {
  return (
    <div style={{ color: color }}>
      <svg
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.00054 1.50109L6.76054 6.24109L1.76054 7.00109C0.920537 7.08109 0.500537 8.34109 1.16054 9.00109L4.76054 12.6611L3.92054 17.9211C3.76054 18.8411 4.76054 19.5011 5.50054 19.0811L10.0005 16.7411L14.5005 19.0811C15.3405 19.5011 16.2605 18.8411 16.0805 17.9211L15.2605 12.6611L18.8405 9.00109C19.5005 8.34109 19.0805 7.16109 18.2605 7.00109L13.2605 6.24109L11.0005 1.50109C10.5805 0.661094 9.42054 0.661094 9.00054 1.50109Z"
          fill="none"
          stroke="currentColor"
        />
      </svg>
    </div>
  );
};

const Rating: React.FC<RatingProps> = ({
  className,
  count,
  value,
  color = "#090F4E",
  hoverColor = "#090F4E",
  activeColor = "#090F4E",
  size = 20,
  edit = false,
  isHalf = true,
  onChange,
  emptyIcon = <EmptyStar />,
  halfIcon = <HalfStar />,
  fullIcon = <FullStar />,
}) => {
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

  const handleMouseMove = (index: number) => {
    if (!edit) {
      return;
    }
    setHoverValue(index);
  };

  const handleMouseLeave = () => {
    if (!edit) {
      return;
    }
    setHoverValue(undefined);
  };

  const handleClick = (index: number) => {
    if (!edit) {
      return;
    }
    if (onChange) {
      onChange(index + 1);
    }
  };

  const getColor = (index: number) => {
    if (hoverValue !== undefined) {
      if (index <= hoverValue) {
        return hoverColor;
      }
    }
    if (value > index) {
      return activeColor;
    }
    return color;
  };

  const stars = [];

  for (let i = 0; i < count; i++) {
    let star: React.ReactElement<{ size: number; color: string }>;
    if (isHalf && value - i > 0 && value - i < 1) {
      star = halfIcon;
    } else if (i < value) {
      star = fullIcon;
    } else {
      star = emptyIcon;
    }

    if (hoverValue !== undefined) {
      if (i <= hoverValue) {
        star = fullIcon;
      }
    }

    stars.push(
      <div
        key={i}
        style={{ cursor: "pointer" }}
        onMouseMove={() => handleMouseMove(i)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(i)}
      >
        {React.cloneElement(star, {
          size: size,
          color: getColor(i),
        })}
      </div>,
    );
  }

  return <div className={`flex gap-0.5 ${className}`}>{stars}</div>;
};

export default Rating;
