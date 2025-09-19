import React, {useState} from 'react';
import {Button, ColorValue, Text, View} from 'react-native';

type FrogProps = {
  color: string;
};

const Frog = (props: FrogProps) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Покорми меня, пожалуйста!' : 'Спасибо!'}
      />
    </View>
  );
};

const Lake = () => {
  return (
    <View style={{flex:1}}>
    <Frog color="red"/>
      <Frog color="yellow" />
      <Frog color="green" />
    </View>
  );
};

export default Lake;