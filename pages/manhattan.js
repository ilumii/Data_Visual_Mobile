import React from 'react'
import { TouchableOpacity, Text, Dimensions, StyleSheet, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import axios from 'axios';

export default class Manhattan extends React.Component {
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

	render() {
		return (
			<View style={styles.container}>
				<MapView
					onMapReady={this.onMapReady}
					style={[styles.map, { flex: 1, marginBottom: this.state.marginBottom }]}
					initialRegion={{
						latitude: 40.7549,
						longitude: -73.9840,
						latitudeDelta: 0.05,
						longitudeDelta: 0.05
					}}
					showsCompass={false}
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
