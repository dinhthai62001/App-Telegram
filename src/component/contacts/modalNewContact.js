// import React from 'react'
// import Modal from 'react-native-modal';

// const ModalNewContact =() =>{
//     const [inPutLastName, setinPutLastName] = useState('');

//     return(
//         <>
//          <Modal
//         isVisible={isModalAdd}
//         animationType="fade"
//         hasBackdrop={false}
//         deviceWidth
//         style={{marginTop: 20}}
//         onRequestClose={() => {
//           setModalAdd(false);
//         }}>
//         <View style={{flex: 1, backgroundColor: '#000000'}}>
//           <View
//             style={{
//               marginTop: 20,
//               flexDirection: 'row',
//               marginLeft: 20,
//               alignItems: 'center',
//             }}>
//             <TouchableOpacity onPress={toggleModalAdd}>
//               <Text style={{fontSize: 15, color: '#0000FF', fontWeight: '400'}}>
//                 Cancle
//               </Text>
//             </TouchableOpacity>
//             <View
//               style={{
//                 justifyContent: 'center',
//                 flex: 1,
//                 alignItems: 'center',
//               }}>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   color: '#fff',
//                   fontWeight: '700',
//                 }}>
//                 New Contact
//               </Text>
//             </View>
//             <TouchableOpacity onPress={addInputData} style={{marginRight: 20}}>
//               <Text style={{fontSize: 15, color: '#fff'}}>Create</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={{marginLeft: 30, marginTop: 40}}>
//             <View style={{flexDirection: 'row'}}>
//               <Image
//                 style={{width: 80, height: 80, borderRadius: 40}}
//                 source={image.SETTINGS.ADD}
//               />
//               <View style={{marginLeft: 10, flex: 1}}>
//                 <View
//                   style={{borderWidth: 0.5, borderBottomColor: '#ffffffff'}}>
//                   <TextInput
//                     placeholder="First Name"
//                     style={{color: '#ffff'}}
//                     placeholderTextColor="#fff"
//                     onChangeText={text => inPutLastName(text)}
//                     value={inPutData}
//                   />
//                 </View>
//                 <View>
//                   <TextInput
//                     placeholder="Last Name"
//                     style={{color: '#ffff'}}
//                     placeholderTextColor="#fff"

//                   />
//                 </View>
//               </View>
//             </View>

//           </View>
//         </View>
//       </Modal>

//         </>

//     )

// }
// export default ModalNewContact;
