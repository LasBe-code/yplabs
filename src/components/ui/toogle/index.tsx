import React, {useEffect, useState} from 'react';
import {Animated, Easing} from 'react-native';
import ToogleStyled from './toogle.styled';

type Props = {
  onToggle: () => void;
  isOn: boolean;
};

const Toggle = ({onToggle, isOn}: Props) => {
  const [animatedValue] = useState(new Animated.Value(isOn ? 1 : 0));

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 50,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isOn, animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 17],
  });

  const color = isOn ? 'green' : 'gray';

  return (
    <ToogleStyled.TouchableContainer onPress={onToggle} color={color}>
      <ToogleStyled.Wheel
        style={{
          transform: [{translateX}],
        }}
      />
    </ToogleStyled.TouchableContainer>
  );
};

export default Toggle;
