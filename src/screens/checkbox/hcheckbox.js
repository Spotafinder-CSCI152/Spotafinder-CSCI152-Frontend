// import {db} from '../../configs/config';
// import React from 'react'
// class checkbox extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         todos: {},
//         presentToDo: '',
//       };
//     }
//     componentDidMount() {
//         db.ref('/todos').on('value', querySnapShot => {
//             let data = querySnapShot.val() ? querySnapShot.val() : {};
//             let todoItems = {...data};
//             this.setState({
//               todos: todoItems,
//             });
//           });
//     }
//     addNewTodo() {
//         db.ref('/todos').push({
//             done: false,
//             todoItem: this.state.presentToDo,
//           });
//           Alert.alert('Action!', 'A new To-do item was created');
//           this.setState({
//             presentToDo: '',
//           });
//     }
//     clearTodos() {
//         db.ref('/todos').remove();
//     }
//     render() {
//       return (
//         <ScrollView
//           style={styles.container}
//           contentContainerStyle={styles.contentContainerStyle}>
//           <View>
//             {/*Empty view: will contain to-do items soon*/}
//           </View>
//           <TextInput
//             placeholder="Add new Todo"
//             value={this.state.presentToDo}
//             style={styles.textInput}
//             onChangeText={e => {
//               this.setState({
//                 presentToDo: e,
//               });
//             }}
//             onSubmitEditing = {this.addNewTodo}
//           />
//           <Button
//             title="Add new To do item"
//             onPress={this.addNewTodo}
//             color="lightgreen"
//           />
//           <View style={{marginTop: 20}}>
//             <Button title="Clear todos" onPress={this.clearTodos} color="red" />
//           </View>
//         </ScrollView>
//       );
//     }
//   }
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'white',
//     },
//     contentContainerStyle: {
//       alignItems: 'center',
//     },
//     textInput: {
//       borderWidth: 1,
//       borderColor: '#afafaf',
//       width: '80%',
//       borderRadius: 5,
//       paddingHorizontal: 10,
//       marginVertical: 20,
//       fontSize: 20,
//     },
//     todoItem: {
//       flexDirection: 'row',
//       marginVertical: 10,
//       alignItems: 'center',
//     },
//     todoText: {
//       borderColor: '#afafaf',
//       paddingHorizontal: 5,
//       paddingVertical: 7,
//       borderWidth: 1,
//       borderRadius: 5,
//       marginRight: 10,
//       minWidth: '50%',
//       textAlign: 'center',
//     },
//   });