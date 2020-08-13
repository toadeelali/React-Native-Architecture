import React from 'react';
import { BodyMedium, Button, Page, SafeAreaView } from '@components/core/';

const Home = () => {
  return (
    <SafeAreaView>
      <Page>
        <BodyMedium>Hello World</BodyMedium>
        <Button title="Start" onPress={(e) => { }} />
      </Page>
    </SafeAreaView>
  );
};

export default Home;
