import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import stopwatchStyles from "./Stopwatch.styles";
import "react-native-reanimated";
import "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { MotiView } from "moti";

const Stopwatch = ({ displayTimer, animationKey }) => {
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState("00:00");

  var initTime = new Date();

  const showTimer = (ms) => {
    const second = Math.floor((ms / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const minute = Math.floor((ms / 1000 / 60) % 60)
      .toString()
      .padStart(2, "0");
    setTime(minute + ":" + second);
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
    <MotiView
      key={animationKey}
      from={displayTimer ? { opacity: 0 } : undefined}
      animate={{
        opacity: 1,
      }}
      transition={displayTimer ? { type: "timing", duration: 500 } : undefined}
      style={
        !displayTimer ? { display: "none" } : stopwatchStyles.stopwatchContainer
      }
    >
      <Text style={{ ...stopwatchStyles.time, fontFamily: "Baloo-Bhaijaan2" }}>
        {time}
      </Text>
      <View style={stopwatchStyles.buttonContainer}>
        <TouchableOpacity onPress={clearTime}>
          <Fontisto
            name="undo"
            size={50}
            color="gray"
            style={stopwatchStyles.clearButton}
          />
        </TouchableOpacity>

        {start ? (
          <TouchableOpacity onPress={() => setStart(false)}>
            <Fontisto
              name="stop"
              size={50}
              color="#81272e"
              style={stopwatchStyles.stopButton}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ height: "auto" }}
            className="button"
            onPress={() => setStart(true)}
          >
            <Fontisto
              name="play"
              size={50}
              color="#5f8971"
              style={stopwatchStyles.startButton}
            />
          </TouchableOpacity>
        )}
      </View>
    </MotiView>
  );
};
export default Stopwatch;
