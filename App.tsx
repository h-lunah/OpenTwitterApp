import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import WebView from 'react-native-webview';

const OpenTwitterApp = () => {
  const webViewRef = React.useRef(null);

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <WebView
        ref={webViewRef}
        source={{uri: 'https://lunar-tweeter.vercel.app/'}}
        javaScriptCanOpenWindowsAutomatically={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        sharedCookiesEnabled={true}
        thirdPartyCookiesEnabled={true}
        incognito={false}
        cacheEnabled={true}
        cacheMode="LOAD_DEFAULT"
        allowsBackForwardNavigationGestures={true}
        onShouldStartLoadWithRequest={() => {
          return true;
        }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default OpenTwitterApp;
