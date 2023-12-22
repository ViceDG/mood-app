import { useEffect, useState } from "react";
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
  const [time, setTime] = useState("00:00:00");
  const [timeSetting, setTimeSetting] = useState({ m: 0, s: 0 });

  var initTime = new Date();

  const showTimer = (ms) => {
    const milliseconds = Math.floor((ms % 1000) / 10)
      .toString()
      .padStart(2, "0");
    const second = Math.floor((ms / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const minute = Math.floor((ms / 1000 / 60) % 60)
      .toString()
      .padStart(2, "0");
    setTime(

      minute + ":" + second + ":" + milliseconds
    );
  };

  const clearTime = () => {
    setTime("00:00:00");
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
        setTime("00:00:00:00");
        clearInterval(id);
      }
    }, 1);
    return () => clearInterval(id);
  }, [start]);

  return (
    <View style={stopwatchStyles.stopwatchContainer}>
      <Text className="timer">{time}</Text>
      <View
        style={{
          marginTop: "80px",
          display: "flex",
          justifyContent: "space-between",
          width: "300px"
        }}
      >
        <TouchableOpacity
          className="button"
          style={{ backgroundColor: "gray", color: "#fff" }}
          onPress={clearTime}
        >
          <Text>Clear</Text>
        </TouchableOpacity>

        {start ? (
          <TouchableOpacity
            className="button"
            style={{ backgroundColor: "#820000", color: "red" }}
            onPress={() => setStart(false)}
          >
            <Text>Stop</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity className="button" onPress={() => setStart(true)}>
            <Text>Start</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}