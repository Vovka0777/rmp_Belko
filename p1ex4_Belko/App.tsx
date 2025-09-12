import React, {useState} from 'react';
import {Button, ColorValue, Text, View} from 'react-native';

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        Я {props.name}, и я {isHungry ? 'голоднен' : 'сыт'}!
      </Text>
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

const Cafe = () => {
  return (
    <View style={{flex:1}}>
    <Cat name="Вася"/>
      <Cat name="Рыжик" />
      <Cat name="Барсик" />
    </View>
  );
};

export default Cafe;