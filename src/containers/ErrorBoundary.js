import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Text, Button } from 'react-native';
import { version } from '../../package.json';

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
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
              <Text>An error occurred v{version}</Text>
              <Button title="Restart" onPress={this.restartApp} />
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
