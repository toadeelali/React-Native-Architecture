import React, { useRef, useState } from 'react';
import { RNCamera } from 'react-native-camera';
import { SafeAreaView, Button } from 'components/core/';

const Camera = () => {
  const ref = useRef();
  const [takingPic, setTakingPic] = useState(false);

  const takePicture = async () => {
    if (ref.current && !takingPic) {
      let options = {
        quality: 0.85,
        fixOrientation: true,
        forceUpOrientation: true,
      };

      setTakingPic(true);

      try {
        const data = await ref.current.takePictureAsync(options);
        console.log('Success', JSON.stringify(data));
      } catch (err) {
        console.log('Error', 'Failed to take picture: ' + (err.message || err));
        return;
      } finally {
        setTakingPic(false);
      }
    }
  };

  return (
    <SafeAreaView>
      <RNCamera
        ref={ref}
        style={{
          flex: 1,
          width: '100%',
        }}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <Button title="take" onPress={takePicture} />
    </SafeAreaView>
  );
};

export default Camera;
