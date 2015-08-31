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

var PhoneInput = require('./phoneInput.js');

var reactNativeExampleSignon = React.createClass({
    getInitialState: function(){
        console.log('constructor');
        return {
            opacityValue: new Animated.Value(0),
            phoneNum: ''
        };
    },
    componentWillMount: function(){
        console.log('will mount');
    },
    componentDidMount: function(){
        console.log('componentDidMount');
        Animated.timing(this.state.opacityValue, {
            toValue: 1,
            duration: 400
        }).start();
    },
    onPhoneSubmit: function(){
    },
    onPressFacebook: function(){
    },
    render: function() {
        console.log(this.state.opacityValue);
        var welcomeText =
          <Animated.Text style={[ style.welcomeText,
              { opacity: this.state.opacityValue }
            ]}>
              Welcome
          </Animated.Text>;

        var fbButton =
            <TouchableHighlight style={[style.fbButtonHighlight ]}>
              <Animated.Text style={[ style.fbButtonText,
                { opacity: this.state.opacityValue }]}
                    onPress={ this.onPressFacebook }>
                 Login with Facebook
              </Animated.Text>
            </TouchableHighlight>;

        var orText =
          <Animated.Text style={[ style.orText,
              {opacity: this.state.opacityValue}
            ]}>
            or enter your phone number
          </Animated.Text>;

        var phoneInput = <PhoneInput style={{}} onSubmitEditing={this.phoneSubmit} />
        var debugInfo =
          <Animated.Text style={[style.debugInfo,
            { opacity: this.state.opacityValue}
          ]}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
          </Animated.Text>;

        return (
            <Animated.View style={style.container}>
              { welcomeText }
              { fbButton }
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
    },
    welcomeText: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10
    },
    debugInfo: {
        textAlign: 'center',
        color: '#333333',
        fontSize: 8,
    },
    orText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#666',
        margin: 10
    },
    fbButtonHighlight: {
        backgroundColor: "rgb(73,100,162)",
        padding: 6
    },
    fbButtonText: {
        fontSize: 14,
        color: '#fff'
    }
});

AppRegistry.registerComponent('reactNativeExampleSignon', () => reactNativeExampleSignon);