import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Picker,
  Button
} from 'react-native';



export default class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      docType:'Cardiologist'
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/robot-dev.png')}
            style={styles.welcomeImage}
            />
            <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Welcome to Medi Assist</Text>
          </View>
          <View style={{height: 20, width: 300}}>
            <Text style={{ fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
  
  }}>Select Country</Text>
          </View>
          <Picker
             selectedValue={'Italy'}
             style={{ height: 50, width: 300 }}
             onValueChange={(itemValue, itemIndex) => {}}>
             <Picker.Item label="Italy" value="Italy" />
          </Picker>
          <View style={{height: 20, width: 300}}>
            <Text style={{ fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
  
  }}>Select City</Text>
          </View>
            <Picker
             selectedValue={'Milan'}
             style={{ height: 50, width: 300 }}
             onValueChange={(itemValue, itemIndex) => {}}>
             <Picker.Item label="Milan" value="Milan" />
          </Picker>
          <View style={{height: 20, width: 300}}>
            <Text style={{ fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
  
  }}>Select Type Of Assistance</Text>
          </View>
          <Picker
             selectedValue={this.state.docType}
             style={{ height: 50, width: 300 }}
             onValueChange={(itemValue, itemIndex) => {
               this.setState({docType:itemValue})
             }}>
             <Picker.Item label="Cardiologist" value="Cardiologist" />
             <Picker.Item label="Dentist" value="Dentist" />
             <Picker.Item label="General Practioner" value="GeneralPractioner" />
             <Picker.Item label="Pharmacy" value="Pharmacy" />
          </Picker>
           <Button
            onPress={()=>this.props.navigation.navigate(this.state.docType)}
            title="Search"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
          </View>
          
  
          
  
        </ScrollView>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text> Medi Assist Alpha Test Version </Text>
          </View>
  
      
      </View>
    ); 
  
  
  
  }
  
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
