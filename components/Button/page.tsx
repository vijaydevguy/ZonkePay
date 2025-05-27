import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

interface ButtonProps {
  text: string;
  link: string;
  secondary?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  link,
  secondary = false,
  className = '',
}) => {
  // Base styles with 14px text (Tailwind's text-[14px])
  const baseStyles = 'rounded-md px-6 py-4 inline-block text-center text-[16px]';
  
  // Variant styles
  const primaryStyles = 'bg-[#FA5117] text-white';
  const secondaryStyles = 'border border-[#FA5117] text-[#FA5117] bg-transparent';

  // Combine classes (custom className will override defaults)
  const finalClassName = classNames(
    baseStyles,
    secondary ? secondaryStyles : primaryStyles,
    className
  );

  return (
    <Link href={link} passHref legacyBehavior>
      <a className={finalClassName}>
        {text}
      </a>
    </Link>
  );
};

export default Button;