/**
 * Example Signon flow
 */
'use strict';

var React = require('react-native');
var {
    Animated,
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    TextInput,
    View,
} = React;

var reactNativeExampleSignon = React.createClass({
    getInitialState: function(){
        console.log('constructor');
        return {
            opacityValue: new Animated.Value(1),
            phoneNum: ''
        };
    },
    componentWillMount: function(){
        console.log('will mount');
    },
    componentDidMount: function(){
        console.log('componentDidMount');
        console.log(this.state);
        // this.state = {};
        // this.state.opacityValue = 1;
        Animated.timing(this.state.opacityValue, {
            toValue: 0,
            duration: 400
        }).start();
    },
    onPhoneChange: function(text){
        console.log(text);
        this.setState({ text });
    },
    onPressFacebook: function(){
    },
    render: function() {
        console.log('render');
        var welcomeText =
          <Text style={{
              fontSize: 30,
              textAlign: 'center',
              margin: 10,
              // opacity: this.state.opacityValue
            }}>
              Welcome
            </Text>;

        var fbButton =
            <TouchableHighlight style={{
              backgroundColor: '#ff0',
            }}>
              <Text style={{fontSize: 30, }}
                    onPress={ this.onPressFacebook }>
                 Sign in with Facebook
              </Text>
            </TouchableHighlight>;

        var orText =
          <Text style={{
              textAlign: 'center',
              fontSize: 20,
              // opacity: this.state.opacityValue
            }}>
            or
          </Text>;

        var phoneInput =
            <TextInput style={{
              fontSize: 30,
              height: 40,
              textAlign: 'center'
              // opacity: this.state.opacityValue
             }}
             onChangeText={ this.onPhoneChange }
             value={ this.state.phoneNum }
             keyboardType={ 'numeric' } />;

        var debugInfo =
          <Text style={{
              textAlign: 'center',
              color: '#333333',
              fontSize: 8,
              // opacity: this.state.opacityValue
            }}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
          </Text>;

        return (
            <Animated.View style={style.container}>
              { welcomeText }
              { orText }
              { phoneInput }
              { debugInfo }
            </Animated.View>
        );
    }
});

var style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});

AppRegistry.registerComponent('reactNativeExampleSignon', () => reactNativeExampleSignon);