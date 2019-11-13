import React from 'react'
import { TouchableOpacity, Text, Dimensions, StyleSheet, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import MapView from 'react-native-maps';
import Heatmap,{PROVIDER_GOOGLE} from 'react-native-maps';
import axios from 'axios';

const styles = StyleSheet.create({
	container: {
	  ...StyleSheet.absoluteFillObject,
	  flex: 1,
	  backgroundColor: 'pink',
	  justifyContent: 'center'
	},
	map: {
	  ...StyleSheet.absoluteFillObject,
	},
  });
  
  const HEATMAPOINTS = [
	{latitude: 49.986111, longitude: 20.061667, weight: 1},
	{latitude:50.193139, longitude:20.288717, weight: 2},
	{latitude:49.740278, longitude:19.588611, weight: 1},
	{latitude:50.061389, longitude:19.938333, weight: 8},
	{latitude:50.174722, longitude:20.986389, weight: 11},
	{latitude:50.064507, longitude:19.920777, weight: 98},
	{latitude:49.3, longitude:19.95, weight: 41},
	{latitude:49.833333, longitude:19.940556, weight: 66},
	{latitude:49.477778, longitude:20.03, weight: 9},
	{latitude:49.975, longitude:19.828333, weight: 11},
	{latitude:50.357778, longitude:20.0325, weight: 33},
	{latitude:50.0125, longitude:20.988333, weight: 76},
	{latitude:50.067959, longitude:19.91266, weight: 63},
	{latitude:49.418588, longitude:20.323788, weight: 52},
	{latitude:49.62113, longitude:20.710777, weight: 88},
	{latitude:50.039167, longitude:19.220833, weight: 1},
	{latitude:49.970495, longitude:19.837214, weight: 78},
	{latitude:49.701667, longitude:20.425556, weight: 1},
	{latitude:50.078429, longitude:20.050861, weight: 1},
	{latitude:49.895, longitude:21.054167, weight: 1},
	{latitude:50.27722, longitude:19.569658, weight: 65},
	{latitude:49.968889, longitude:20.606389, weight: 1},
	{latitude:49.51232, longitude:19.63755, weight: 1},
	{latitude:50.018077, longitude:20.989849, weight: 35},
	{latitude:50.081698, longitude:19.895629, weight: 22},
	{latitude:49.968889, longitude:20.43, weight: 54},
	{latitude:50.279167, longitude:19.559722, weight: 1},
	{latitude:50.067947, longitude:19.912865, weight: 69},
	{latitude:49.654444, longitude:21.159167, weight: 1},
	{latitude:50.099606, longitude:20.016707, weight: 80},
	{latitude:50.357778, longitude:20.0325, weight: 99},
	{latitude:49.296628, longitude:19.959694, weight: 1},
	{latitude:50.019014, longitude:21.002474, weight: 46},
	{latitude:50.056829, longitude:19.926414, weight: 22},
	{latitude:49.616667, longitude:20.7, weight: 1},
	{latitude:49.883333, longitude:19.5, weight: 33},
	{latitude:50.054217, longitude:19.943289, weight: 1},
	{latitude:50.133333, longitude:19.4, weight: 100}
  ];
  
  class Details extends React.Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
		map: null,
		latitude: 33.6507561,
		longitude: 73.0461364,
	  };
	}
  
	render() {
        return (
            <View style={styles.container}>
                <MapView
                    initialRegion={{
                        latitude: 50.0614300,
                        longitude: 19.9365800,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.0121,
                    }}
                    provider={PROVIDER_GOOGLE}
                    style={{ flex: 1 }}
                >
                    <Heatmap
                        points={HEATMAPOINTS}
                        gradient={{
                            colors: ["#79BC6A", "#BBCF4C", "#EEC20B", "#F29305", "#E50000"],
                            startPoints: [0, 0.25, 0.50, 0.75, 1],
                            colorMapSize: 500
                        }}
                    ></Heatmap>
                </MapView>
            </View>
        );
    }
  }
  
  export default Details;