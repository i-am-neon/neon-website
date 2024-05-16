import React, { FC } from 'react';

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

const ExternalLink: FC<LinkProps> = ({ to, children }) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className="text-primary underline"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
