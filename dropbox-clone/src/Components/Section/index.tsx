import React from 'react';

import { Container, HeaderWrapper, Header, DropboxLogo, Content } from './styles';

interface props {
    variant: 'blue' | 'beige' | 'white' | 'black';
    title: string;
    description: string
}

const Section: React.FC<props> = ({variant, title , description}) => {
  return (
      <Container className={variant}>
        <HeaderWrapper>
          <Header>
            <h1>
              <DropboxLogo />
              <span>Dropnox</span>
            </h1>

            <button>Interagir</button>
          </Header>
        </HeaderWrapper>

          <Content>
            <h2>{title}</h2>
            <p>{description}</p>
          </Content>
      </Container>
  );
}

export default Section;