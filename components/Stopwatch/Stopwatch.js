import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import stopwatchStyles from "./Stopwatch.styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
const Stopwatch = ({ displayTimer }) => {
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
    <View
      style={
        !displayTimer ? { display: "none" } : stopwatchStyles.stopwatchContainer
      }
    >
      <Text style={{ ...stopwatchStyles.time, fontFamily: "Baloo-Bhaijaan2" }}>
        {time}
      </Text>
      <View style={stopwatchStyles.buttonContainer}>
        <TouchableOpacity onPress={clearTime}>
          {/* <Text
            style={{
              ...stopwatchStyles.clearButton,
              fontFamily: "Baloo-Bhaijaan2",
            }}
          >
            Clear
          </Text> */}

          <Fontisto
            name="undo"
            size={50}
            color="rgba(255, 255, 255, 0.47)"
            style={{
              ...stopwatchStyles.clearButton,
            }}
          />
        </TouchableOpacity>

        {start ? (
          <TouchableOpacity onPress={() => setStart(false)}>
            {/* <Text
              style={{
                ...stopwatchStyles.stopButton,
                fontFamily: "Baloo-Bhaijaan2",
              }}
            >
              Stop
            </Text> */}

            <FontAwesome
              name="stop"
              size={60}
              color="rgba(255, 7, 15, 0.51)"
              style={{
                ...stopwatchStyles.stopButton,
              }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ height: "auto" }}
            className="button"
            onPress={() => setStart(true)}
          >
            {/* <Text
              style={{
                ...stopwatchStyles.startButton,
                fontFamily: "Baloo-Bhaijaan2",
              }}
            >
              Start
            </Text> */}
            <FontAwesome5
              name="play"
              size={60}
              color="rgba(0, 162, 68, 0.64)"
              style={{
                ...stopwatchStyles.startButton,
              }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Stopwatch;
