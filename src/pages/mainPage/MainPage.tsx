import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { TopContent } from 'components/topContent/TopContent';
import { Content } from 'components/content/Content';
import { Footer } from 'components/footer/Footer';

export const MainPage: FC = () => {
  let { slug }: Record<string, string> = useParams();

  return (
    <>
      <TopContent slug={Number(slug)} />
      <Content />
      <Footer />
    </>
  );
};
