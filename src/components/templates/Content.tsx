import type { FC } from 'react';

interface ContentProps {
  childrens?: any
}

const Content: FC<ContentProps> = ({ childrens }) => {
  return (
    <div className="flex flex-col mt-7">
      {childrens}
    </div>
  );
}
export default Content;