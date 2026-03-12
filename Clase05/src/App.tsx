import { StatusBar, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { CountScreen } from './components';
import React from 'react';
import { appStyles } from './App.style';

type AppProps = {
  atributo: string;
}

type AppState = {
  count: number;
  selectedNumber: number;
}

export class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);

    this.state = {
      count: 0,
      selectedNumber: 1
    };
  }

  selectNumber = (num: number) => {

    console.log("Número seleccionado:", num);

    this.setState({
      selectedNumber: num
    });
  };

  sum = () => {

    const result = this.state.count + this.state.selectedNumber;

    console.log("Operación: SUMA");
    console.log(this.state.count, "+", this.state.selectedNumber, "=", result);

    this.setState({
      count: result
    });
  };

  rest = () => {

    const result = this.state.count - this.state.selectedNumber;

    console.log("Operación: RESTA");
    console.log(this.state.count, "-", this.state.selectedNumber, "=", result);

    this.setState({
      count: result
    });
  };

  render() {

    return (
      <SafeAreaProvider>
        <StatusBar />

        <View style={appStyles.safeArea}>
          <View style={appStyles.container}>

            <CountScreen label={"1"} OnPress={() => this.selectNumber(1)} />
            <CountScreen label={"2"} OnPress={() => this.selectNumber(2)} />
            <CountScreen label={"3"} OnPress={() => this.selectNumber(3)} />
            <CountScreen label={"4"} OnPress={() => this.selectNumber(4)} />
            <CountScreen label={"5"} OnPress={() => this.selectNumber(5)} />
            <CountScreen label={"6"} OnPress={() => this.selectNumber(6)} />
            <CountScreen label={"7"} OnPress={() => this.selectNumber(7)} />
            <CountScreen label={"8"} OnPress={() => this.selectNumber(8)} />
            <CountScreen label={"9"} OnPress={() => this.selectNumber(9)} />

            <CountScreen label={"SUMAR"} OnPress={this.sum} />

            <CountScreen label={"RESTAR"} OnPress={this.rest} />

          </View>
        </View>

      </SafeAreaProvider>
    );
  }
}

export default App;