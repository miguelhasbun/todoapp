import React from 'react';
import {Text, View } from 'react-native';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';


export default class Checked extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }
    render(){
    if (this.state.loading) {
        return <Expo.AppLoading />;
    }

    return(  
      <Container>
      <Header>
          <Body style={{flex:1 ,justifyContent: 'center', alignItems: 'center', marginTop: 25}}>
              <Title >Reactive Todos</Title>
              
          </Body>
      </Header>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Checked!</Text>
          
      </View> 
  </Container> 
    )
}

}