var React = require('react-native');
var { TextInput, View, Text, StyleSheet } = React;
var _ = require('lodash');

var PhoneInput = React.createClass({
    getInitialState: function(){
        return {
            phone: this.formatPhone("")
        };
    },
    formatPhone: function(input){
        var numbersOnly = input.match(/[0-9]/g);
        numbersOnly = numbersOnly || [];
        if (numbersOnly.length > 10) numbersOnly = numbersOnly.slice(0,10);
        var padding = _.range(10 - numbersOnly.length);
        padding = padding.map(function(){ return ' '; });
        numbersOnly = numbersOnly.concat(padding);

        var output = "(" + numbersOnly.slice(0,3).join("") + ") " +
                numbersOnly.slice(3,6).join("") + "-" +
                numbersOnly.slice(6,11).join("");
        return output;
    },
    onChangeText: function(text){
        var formatted = this.formatPhone(text);
        this.setState({phone: formatted });
    },
    render: function(){
        return (
          <View style={styles.view}>
           <Text style={styles.text}>(</Text>
            <TextInput style={[styles.input, this.props.style || {}]}
             onChangeText={ this.onChangeText }
             iosreturnKeyType={ 'next' }
             iosenablesReturnKeyAutomatically={ true }
             keyboardType={ 'numeric' }
             value={this.state.phone} />
         </View>
        );
    }
});

var styles = StyleSheet.create({
    view: {
        flexDirection: 'column'
    },
    input: {
        fontSize: 30,
        height: 40,
        textAlign: 'center'
    },
    text: {
    }
});

module.exports = PhoneInput;
