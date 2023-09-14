import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen({ route }) {
  const { params } = route;
  const { location } = params;
  const { locPhoto, coords } = location;

  console.log('Coords:', coords.location);

  return (
    <View style={styles.container}>
      {coords ? (
        <MapView
          style={styles.mapStyle}
          region={coords}
          mapType='standard'
          minZoomLevel={5}
        >
          <Marker
            title={locPhoto}
            coordinate={coords}
            description={locPhoto}
          />
        </MapView>
      ) : (
        <Text>incorrect location</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
