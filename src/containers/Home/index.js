import React from 'react';
import { BodyMedium } from '@components/core/Text';
import { Button } from '@components/core/Button';
import { Page } from '@components/core/View';

const Home = () => {
  return (
    <Page>
      <BodyMedium>Hello World</BodyMedium>
      <Button title="Restart" onPress={() => { }} />
    </Page>
  );
};

export default Home;
