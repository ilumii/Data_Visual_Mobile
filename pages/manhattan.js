import React from 'react'
import { TouchableOpacity, Text, Dimensions, StyleSheet, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from 'react-native-maps';
import axios from 'axios';

export default class Manhattan extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            coords: [],
            issues: []
        }
    }

    async componentDidMount() {
        this._isMounted = true;
        try {
            let { data } = await axios.get('https://data-visual-api.herokuapp.com/borough/manhattan');
            let issues = [];
            let coords = [];
            console.log(data[0].latitude)
            data.forEach((e, i) => {
                if (e.longitude && e.latitude) {
                    coords.push(
                        <Marker key={i}
                            coordinate={{ latitude: e.latitude, longitude: e.longitude }}
                        />
                    )
                    issues.push(
                        <Polyline key={i}
                            coordinates={[
                                { latitude: e.latitude, longitude: e.longitude },
                                { latitude: e.latitude, longitude: e.longitude + .0001 },
                                { latitude: e.latitude - .0001, longitude: e.longitude + .0001 },
                                { latitude: e.latitude - .0001, longitude: e.longitude },
                                { latitude: e.latitude, longitude: e.longitude }
                            ]}
                            strokeColor="#dc143c"
                            strokeWidth={6}
                        />
                    )
                }
            });
            if (this._isMounted) {
                this.setState({
                    coords: coords,
                    issues: issues
                })
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    onMapReady = () => this.setState({ marginBottom: 0 })

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
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
                    {/* {this.state.coords} */}
                    {this.state.issues}
                    {/* <Polyline
                        coordinates={[
                            { latitude: 40.7549, longitude: -73.9840 },
                            { latitude: 40.7549, longitude: -73.9841 },
                            { latitude: 40.7548, longitude: -73.9841 },
                            { latitude: 40.7548, longitude: -73.9840 },
                            { latitude: 40.7549, longitude: -73.9840 }
                        ]}
                        strokeColor="#dc143c"
		strokeWidth={6}
                    /> */}
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