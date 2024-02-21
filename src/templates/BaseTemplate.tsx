'use client';

import { type ReactNode } from 'react';

type IBaseTemplateProps = {
  children: ReactNode;
};

const BaseTemplate = (props: IBaseTemplateProps) => {
  return <main className="relative">{props.children}</main>;
};

export { BaseTemplate };
