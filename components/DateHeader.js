import React from "react";
import { Text } from "react-native";
import { purple } from "../utils/colors";

export default function DateHeader({ date }) {
  return (
    <Text style={{ marginTop: 40, color: purple, fontSize: 20 }}>{date}</Text>
  );
}
