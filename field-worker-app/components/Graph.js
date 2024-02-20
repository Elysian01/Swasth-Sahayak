import React from "react";
import { View, StyleSheet } from "react-native";
import { LineChart, Grid } from "react-native-svg-charts";

const Graph = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  return (
    <View style={styles.container}>
      <LineChart
        style={styles.chart}
        data={data}
        svg={{ stroke: "rgb(134, 65, 244)" }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid />
      </LineChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  chart: {
    height: 200,
    width: "100%",
  },
});

export default Graph;
