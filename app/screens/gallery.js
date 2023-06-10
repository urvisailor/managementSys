import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Svg, { Image } from 'react-native-svg';
import styles from './styles';
import Button from '../components/button';

const Gallery = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);
  const [emojiPosition, setEmojiPosition] = useState({ x: 0, y: 0 });
  const [emojiVisible, setEmojiVisible] = useState(false);

  const handleCapture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      setCapturedImage(data.uri);
    }
  };

  const handleEmojiPress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    setEmojiPosition({ x: locationX, y: locationY });
    setEmojiVisible(true);
  };

  return (
    <View style={[styles.container,styles.cameraContainer]}>
      <RNCamera
        ref={cameraRef}
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
      />
      {capturedImage && (
        <View style={styles.previewContainer}>
          <Svg style={styles.previewSvg}>
            <Image
              href={{ uri: capturedImage }}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
            />
            {emojiVisible && (
              <Text
                style={[styles.emoji, { left: emojiPosition.x, top: emojiPosition.y }]}
                onPress={handleEmojiPress}
              >
                😀
              </Text>
            )}
          </Svg>
        </View>
      )}
      {!capturedImage && (
       <Button text={'Capture'} onClick={handleCapture}/>
      )}
    </View>
  );
};

export default Gallery