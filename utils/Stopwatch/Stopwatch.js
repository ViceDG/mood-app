import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import {
    View,
    Text,
    TouchableOpacity,
    Button
  } from "react-native";

import stopwatchStyles from "./Stopwatch.styles";



export default function Stopwatch() {
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState("00:00");
  const [timeSetting, setTimeSetting] = useState({ m: 0, s: 0 });

  var initTime = new Date();

  const showTimer = (ms) => {
    const second = Math.floor((ms / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const minute = Math.floor((ms / 1000 / 60) % 60)
      .toString()
      .padStart(2, "0");
    setTime(

      minute + ":" + second 
    );
  };

  const clearTime = () => {
    setTime("00:00");
    setCount(0);
  };

  useEffect(() => {
    if (!start) {
      return;
    }
    var id = setInterval(() => {
      var left = count + (new Date() - initTime);
      setCount(left);
      showTimer(left);
      if (left <= 0) {
        setTime("00:00:00");
        clearInterval(id);
      }
    }, 1);
    return () => clearInterval(id);
  }, [start]);

  return (
    <View style={stopwatchStyles.stopwatchContainer}>
      <Text style={{...stopwatchStyles.time,fontFamily: "Baloo-Bhaijaan2"}}>{time}</Text>
      <View
        style={stopwatchStyles.buttonContainer}
      >
        <TouchableOpacity
          
          onPress={clearTime}
        >
          <Text style={{...stopwatchStyles.clearButton,fontFamily: "Baloo-Bhaijaan2"}}>Clear</Text>
        </TouchableOpacity>

        {start ? (
          <TouchableOpacity
            onPress={() => setStart(false)}
          >
            <Text style={{...stopwatchStyles.stopButton,fontFamily: "Baloo-Bhaijaan2"}}>Stop</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity className="button" onPress={() => setStart(true)}>
            <Text style={{...stopwatchStyles.startButton,fontFamily: "Baloo-Bhaijaan2"}}>Start</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}