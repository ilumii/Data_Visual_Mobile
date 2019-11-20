import React from 'react'
import { TouchableOpacity, Text, Dimensions, StyleSheet, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import axios from 'axios';

export default class HomeMap extends React.Component {
	_isMounted = false;
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	async componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	onMapReady = () => this.setState({ marginBottom: 0 })

	navigate = async (event) => {
		let coords = await event.coordinate;
		if (coords.latitude < 40.7 && coords.longitude > -74 && coords.longitude < -73.86) {
			Actions.Brooklyn();
		}
		else if (coords.latitude > 40.81 && coords.longitude > -73.93 && coords.longitude < -73.8) {
			Actions.Bronx();
		}
		else if (coords.latitude < 40.83 && coords.latitude > 40.7 && coords.longitude > -74 && coords.longitude < -73.94) {
			Actions.Manhattan();
		}
		else if (coords.latitude < 40.76 && coords.latitude > 40.71 && coords.longitude < -73.7 && coords.longitude > -73.86) {
			Actions.Queens();
		}
		else if (coords.latitude < 40.63 && coords.latitude > 40.5 && coords.longitude < -74.1 && coords.longitude > -74.2) {
			Actions.StatenIsland();
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<MapView
					provider={PROVIDER_GOOGLE}
					onMapReady={this.onMapReady}
					onPress={e => this.navigate(e.nativeEvent)}
					style={[styles.map, { flex: 1, marginBottom: this.state.marginBottom }]}
					initialRegion={{
						latitude: 40.73283051513457,
						longitude: -73.9417390152812,
						latitudeDelta: 0.4,
						longitudeDelta: 0.4
					}}
					showsCompass={false}
					zoomTapEnabled={false}
					scrollEnabled={false}
					zoomEnabled={false}
					loadingEnabled={true}>
				</MapView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	map: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	}
});