import React, {useState} from 'react';
import {Button, ColorValue, Text, View} from 'react-native';

type FrogProps = {
  color: string;
};

const Frog = (props: FrogProps) => {
  

  return (
    <View>
      <Text>
        Я {props.name}, и я {isHungry ? 'голоднен' : 'сыт'}!
      </Text>
      <Button
        onPress={() => {
          exNumber(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Покорми меня, пожалуйста!' : 'Спасибо!'}
      />
    </View>
  );
};

const Lake = () => {
  const [isHungry, exNumber] = useState(true);
  return (
    <View style={{flex:1}}>
    <Frog name="Вася"/>
      <Frog name="Рыжик" />
      <Frog name="Барсик" />
    </View>
  );
};

export default Lake;