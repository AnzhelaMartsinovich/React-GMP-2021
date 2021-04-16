import React, { FC } from 'react';

import { TopContent } from 'components/topContent/TopContent';
import { Content } from 'components/content/Content';
import { Footer } from 'components/footer/Footer';

export const MainPage: FC = () => (
  <>
    <TopContent />
    <Content />
    <Footer />
  </>
);
