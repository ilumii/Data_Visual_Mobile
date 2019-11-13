import React from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Button, Text } from 'native-base';

class Home extends React.Component {

   goToAbout = () => {
      Actions.about()
   }

   goToManhattan = () => {
      Actions.Manhattan()
   }

   render() {
      return (
         <Container>
         <View style={{styles}} >
            <Button onPress={this.goToAbout}>
               <Text>This is HOME!</Text>
            </Button>
            <Button onPress={this.goToManhattan}>
               <Text>Manhattan</Text>
            </Button>
            <Button onPress={this.goToManhattan}>
               <Text>This is HOME!</Text>
            </Button>
            <Button onPress={this.goToManhattan}>
               <Text>This is HOME!</Text>
            </Button>
            <Button onPress={this.goToManhattan}>
               <Text>This is HOME!</Text>
            </Button>
         </View>
         </Container>
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
