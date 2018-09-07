import React from 'react';
import {Text, View } from 'react-native';
import Add from './Add';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';
import DialogInput from 'react-native-dialog-input';

export default class All extends React.Component {
   constructor(props){
       super(props);
       this.state={
           loading:true,
           isDialogVisible: false
       }
       this.onPress=this.onPress.bind(this);
       
   }
  onPress(){
    this.setState({
        isDialogVisible: true
    })
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
      <Text>All!</Text>
      <Add func = {this.onPress}/>    
      </View> 
      
      <DialogInput isDialogVisible={this.state.isDialogVisible}
            title={"Agregar nueva Tarea"}
            hintInput ={"Ingrese nueva tarea"}
            submitInput={(inputedText) => {this.handleChangedText(inputedText)}}
            closeDialog={ () => {this.setState({isDialogVisible: false})}}>
        </DialogInput>
 
      
    </Container> 
    )
}

}