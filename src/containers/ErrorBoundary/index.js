import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { version } from '../../../package.json';
import { BodyMedium, Button, Page, SafeAreaView, Paper } from '@components/core/';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  restartApp = () => {
    this.setState({ error: null });
    // this.props.dispatch(resetGlobal());
  };

  render() {
    if (this.state.hasError) {
      return (
        <SafeAreaView>
          <Page>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              <Paper>
                <BodyMedium>An error occurred v{version}</BodyMedium>
                <Button title="Restart" onPress={this.restartApp} />
              </Paper>
            </ScrollView>
          </Page>
        </SafeAreaView>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
