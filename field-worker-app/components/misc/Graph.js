import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const Graph = () => {
  // Sample data for the chart
  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: ['Malaria', 'Malaria', 'Malaria', 'Malaria'],
    datasets: [
      {
        data: [20, 45, 28, 80],
      },
    ],
  };
  const  chartConfig = {
    decimalPlaces: 1,
    backgroundGradientFrom:'#f2f2f2',
    backgroundGradientTo: '#f2f2f2',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };
  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={screenWidth}
        height={400}
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Graph;
