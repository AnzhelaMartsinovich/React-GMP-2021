import React, { FC } from 'react';

import { Logo } from 'components/common/logo/Logo';
import { Footer } from 'components/footer/Footer';
import notFound from 'img/not-found.jpg';

import {
  NotFound,
  Header,
  Content,
  NotFoundImage,
  NotFoundLink,
  NotFoundImageWrap,
} from './NotFoundPage.style';
import { Title1 } from 'components/common/title/Title.style';

export const NotFoundPage: FC = () => (
  <NotFound>
    <Header>
      <Logo />
    </Header>
    <Content>
      <Title1>Page not found</Title1>
      <NotFoundImageWrap>
        <NotFoundImage src={notFound} />
        <NotFoundLink to='/'>Go back to home</NotFoundLink>
      </NotFoundImageWrap>
    </Content>
    <Footer />
  </NotFound>
);
