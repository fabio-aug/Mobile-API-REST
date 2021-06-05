import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  loadBloco = () => {
    fetch("http://localhost/Mobile/SRC/")
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.items || []
        })
      });
  }

  componentDidMount() {
    this.loadBloco();
  }

  render() {
    return (
      <View style={styles.container1}>
        <View style={styles.container2}>
        <FlatList style={styles.paragraph}
          data={this.state.data}
          renderItem={({item}) => (
            <View style={styles.container3}>
              <View>
                <Text style={styles.container4}>ID DISCIPLINA : {item.idDisciplina}</Text>
                <Text>ID CURSO : {item.idCurso}</Text>
                <Text>NOME : {item.nome}</Text>
              </View>
            </View>
          )}
        />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#81c784',
    padding: 10,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#c8e6c9',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  container3: {
    padding: 10,
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#81c784'
  },
  container4: {
    padding: 4,
    marginBottom: 8,
    flex: 1,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#81c784'
  },
});

