import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { jsx } from "react/jsx-runtime";

type FrogProps = {
  name: string;
  color: string;
};

const Frog = (props: FrogProps) => {
  const [isHungry, setIsHungry] = useState(true);

  return <View style={[styles.frog, { backgroundColor: props.color }]}>
    <Text>{props.name}</Text>
  </View>;
};

type PressButtonProps = {
  num: number;
  pressHandler: (num: number) => void;
};

const PressButton = (props: PressButtonProps) => {
  return (
    <Pressable
      style={styles.pressableButton}
      onPress={() => {
        props.pressHandler(props.num);
      }}
    >
      <Text>{props.num}</Text>
    </Pressable>
  );
};

const Lake = () => {
  const [exNumber, setExNumber] = useState(0);

  let lakeStyle;
  switch (exNumber) {
    case 1:
      lakeStyle = [styles.lake, styles.ex01];
      break;
    case 2:
      lakeStyle = [styles.lake, styles.ex02];
      break;
    case 3:
      lakeStyle = [styles.lake, styles.ex03];
      break;
    case 4:
      lakeStyle = [styles.lake, styles.ex04];
      break;
    case 5:
      lakeStyle = [styles.lake, styles.ex05];
      break;
      case 6:
     lakeStyle = [styles.lake, styles.ex06];
      break;
    case 7:
     lakeStyle = [styles.lake, styles.ex07];
      break;
    case 8:
      lakeStyle = [styles.lake, styles.ex08];
      break;
    case 9:
      lakeStyle = [styles.lake, styles.ex09];
      break;
    case 10:
      lakeStyle = [styles.lake, styles.ex10];
      break;
    case 11:
     lakeStyle = [styles.lake, styles.ex11];
      break;
    case 12:
      lakeStyle = [styles.lake, styles.ex12];
      break;
    case 13:
     lakeStyle = [styles.lake, styles.ex13];
      break;
    case 18:
     lakeStyle = [styles.lake, styles.ex18];
      break;
    case 19:
      lakeStyle = [styles.lake, styles.ex19];
      break;
    case 21:
      lakeStyle = [styles.lake, styles.ex21];
      break;
    case 22:
      lakeStyle = [styles.lake, styles.ex22];
      break;
    case 23:
      lakeStyle = [styles.lake, styles.ex23];
      break;
    case 24: 
     lakeStyle = [styles.lake, styles.ex24];
      break;
    default:
      lakeStyle = [styles.lake, styles.ex01];
      break;
  }

     let i=2;
     let pressButtons: JSX.Element =(
      <PressButton num= {1} pressHandler={setExNumber}/>
     );
     while(i<25) {
      pressButtons=(
        <>
        {pressButtons}
        <PressButton num={i} pressHandler={setExNumber} />
        </>
      );
      i++;
     }
  return (
    <View style={styles.main}>
      <View style={lakeStyle}>
        <Frog color="red" name="1"/>
        <Frog color="yellow" name="2" />
        <Frog color="blue" name="3"/>
      </View>
      <Text>Текущая задача = {exNumber}</Text>
     <View style={styles.buttons}>
      {pressButtons}
       {/*<PressButton num={1} pressHandler={setExNumber} />
        <PressButton num={2} pressHandler={setExNumber} />
        <PressButton num={3} pressHandler={setExNumber} />
        <PressButton num={4} pressHandler={setExNumber} />
        <PressButton num={5} pressHandler={setExNumber} />
         <PressButton num={6} pressHandler={setExNumber} />
          <PressButton num={7} pressHandler={setExNumber} />
           <PressButton num={8} pressHandler={setExNumber} />
            <PressButton num={9} pressHandler={setExNumber} />
             <PressButton num={10} pressHandler={setExNumber} />
              <PressButton num={11} pressHandler={setExNumber} />
               <PressButton num={12} pressHandler={setExNumber} />
                <PressButton num={13} pressHandler={setExNumber} />
                 <PressButton num={14} pressHandler={setExNumber} />
                  <PressButton num={15} pressHandler={setExNumber} />
                   <PressButton num={16} pressHandler={setExNumber} />
                    <PressButton num={17} pressHandler={setExNumber} />
                     <PressButton num={18} pressHandler={setExNumber} />
                      <PressButton num={19} pressHandler={setExNumber} />
                       <PressButton num={20} pressHandler={setExNumber} />
                        <PressButton num={21} pressHandler={setExNumber} />
                         <PressButton num={22} pressHandler={setExNumber} />
                          <PressButton num={23} pressHandler={setExNumber} />
                           <PressButton num={24} pressHandler={setExNumber} />*/}
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 30,
  },
  lake: {
   flex: 1,
    backgroundColor: "lightblue",
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "darkblue",
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  frog: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 6,
  },
  buttons: {
   flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },
  pressableButton: {
   width: 50,
    height: 50,
    backgroundColor: "yellow",
    margin: 6,
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  ex01: {
    display: "flex",
    justifyContent: "flex-end",
  },
  ex02: {
    display: "flex",
    justifyContent: "center",
  },
  ex03: {
    display: "flex",
    justifyContent: "space-around",
  },
  ex04: {
    display: "flex",
    justifyContent: "space-between",
  },
  ex05: {
    display: "flex",
    alignItems: "flex-end",
  },
  ex06: {
   flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ex07: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  ex08: {
   flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  ex09: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  ex10: {
  flexDirection: "column-reverse",
    justifyContent: "flex-end",
    alignItems: "center",
  },
 ex11: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
 ex12: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
   ex13: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  ex14: {
    display: "flex",
    justifyContent: "flex-end",
  },
  ex15: {
    display: "flex",
    justifyContent: "flex-end",
  },
  ex16: {
    display: "flex",
    justifyContent: "flex-end",
  },
  ex17: {
    display: "flex",
    justifyContent: "flex-end",
  },
 ex18: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  ex19: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 150,
  },
    ex20: {
    display: "flex",
    justifyContent: "flex-end",
  },
   ex21: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
   ex22: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },
    ex23: {
    flexDirection: "column-reverse",
    flexWrap: "wrap",
    alignContent: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
  },
     ex24: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "space-between",
  },

});

export default Lake;
