import React from 'react';
import { BodyMedium, Button, Page, SafeAreaView } from '@components/core/';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Page>
        <BodyMedium>Hello World</BodyMedium>
        <Button title="Start" onPress={() => navigation.navigate('Camera')} />
      </Page>
    </SafeAreaView>
  );
};

export default Home;
