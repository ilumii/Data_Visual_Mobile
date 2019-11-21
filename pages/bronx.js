import React from 'react'
import { TouchableOpacity, Text, Dimensions, StyleSheet, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import MapView, { Heatmap, PROVIDER_GOOGLE, Polyline, Marker } from 'react-native-maps';
import axios from 'axios';

export default class Bronx extends React.Component {
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
            let { data } = await axios.get('https://data-visual-api.herokuapp.com/borough/bronx');
            let coords = [];
            data.forEach((e, i) => {
                if (e.longitude && e.latitude) {
                    color = e.price <= 100 ? '#ffa500' : (e.price <= 200 && e.price > 100) ? '#ff4500' : '#ff0000';
                    coords.push(
                        <Marker key={i}
                            coordinate={{ latitude: e.latitude, longitude: e.longitude }}
                            pinColor={color}>
                            <MapView.Callout >
                                <Text>Price: ${e.price} per night{"\n"}Number Of Reviews: {e.number_of_reviews}{"\n"}Room Type: {e.room_type}</Text>
                            </MapView.Callout>
                        </Marker>
                    )
                }
            });
            if (this._isMounted) {
                this.setState({
                    coords: coords,
                })
            }
        }
        catch (err) {
            console.log(err);
        }
        try {
            let { data } = await axios.get('http://data-visual-api.herokuapp.com/service/bronx');
            let issues = [];
            data.forEach((e, i) => {
                if (e.longitude && e.latitude) {
                    issues.push({
                        longitude: e.longitude,
                        latitude: e.latitude,
                        weight: 1
                    }
                    )
                }
            });
            if (this._isMounted) {
                this.setState({
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
                        latitude: 40.849297,
                        longitude: -73.879733,
                        latitudeDelta: 0.12,
                        longitudeDelta: 0.12
                    }}
                    showsCompass={false}
                    loadingEnabled={true}>
                    {this.state.coords}
                    {/* {this.state.issues} */}
                    <Heatmap
                        points={this.state.issues}
                        onZoomRadiusChange={{
                            zoom: [0, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            radius: [10, 10, 15, 20, 30, 60, 80, 100, 120, 150, 180, 200, 250, 250]
                        }}
                        gradient={{
                            colors : ["#79BC6A", "#BBCF4C", "#EEC20B", "#F29305", "#E50000"],
                            startPoints : [.0002,.005,.01,.03,.04],
                            colorMapSize : 256
                        }}
                        opacity = {.7}
                        // gradientSmoothing={10}
                        radius={60}
                        heatmapMode="POINTS_DENSITY"
                    ></Heatmap>
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