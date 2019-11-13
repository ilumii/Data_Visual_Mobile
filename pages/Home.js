import React from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends React.Component {

   goToAbout = () => {
      Actions.about()
   }

   goToManhattan = () => {
      Actions.Manhattan()
   }

   goToBrooklyn = () => {
      Actions.Brooklyn()
   }

   goToQueens = () => {
      Actions.Queens()
   }

   goToStatenIsland = () => {
      Actions.StatenIsland()
   }

   goToBronx = () => {
      Actions.Bronx()
   }
   
   render() {
      return (
         <View style={{styles}} >
            <TouchableOpacity onPress={this.goToAbout}>
               <Text>This is HOME!</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goToManhattan}>
               <Text>Manhattan</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goToBrooklyn}>
               <Text>Brooklyn</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goToQueens}>
               <Text>Queens</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goToStatenIsland}>
               <Text>Staten Island</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goToBronx}>
               <Text>Bronx</Text>
            </TouchableOpacity>
         </View>
      )
   }
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center'
   },
})
export default Home