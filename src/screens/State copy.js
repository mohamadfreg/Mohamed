import { StyleSheet, Text, TextInput, TouchableOpacity, View, txt } from 'react-native'
import React, { useState } from 'react'

const State = () => {
    const [number,setnumber]=useState(0)
    const [num1, setNum1] = useState('');
    const [num2, settNum2]= useState('');
    const [result, settresult]= useState('');

    const calculate = (x) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        let sum;
        switch (x) {
          case '+':
            sum = n1 + n2;
            break;
          case '-':
            sum = n1 - n2;
            break;
          case '*':
            sum = n1 * n2;
            break;
          case '/':
            sum = n1 / n2;
            break;
          default:
            sum = '';
        }
    
    }
   
    }
 return (
    <View style={styles.screen}>
        <View style={styles.qty}>
        <TouchableOpacity  onPress={()=>{if(number<10){setnumber(number+1)}}}>
            <Text style={styles.text}> + </Text>
        </TouchableOpacity>
            <Text style={styles.text}>{number}</Text>
        <TouchableOpacity  onPress={()=>{if(number>0){setnumber(number-1)}}}>
            <Text style={styles.text}> - </Text>
        </TouchableOpacity>
        </View>

        <TextInput 
            style={styles.input1}
            keyboardType="numeric"
            value={number}
        >

        </TextInput>
         <View style={styles.mohamad}>
            <View style={styles.grid}>
              <TextInput style={styles.txt}>-</TextInput>
              <Text style={styles.txt}>?</Text>
              <TextInput style={styles.txt}>-</TextInput>
              <Text style={styles.txt}>result</Text>
            </View>
            <View style={styles.grid2}>
              <Text style={styles.txt}>+</Text>
              <Text style={styles.txt}>-</Text>
              <Text style={styles.txt}>*</Text>
              <Text style={styles.txt}>\</Text>
            </View>
         </View>
        
             
        
    </View>
  )


export default State

const styles = StyleSheet.create({
    input1:{
        backgroundColor:'white',
        width:50,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
    },
    screen:{
        flex:1,
        backgroundColor:"rad",

    },
    qty:{
        flexDirection:"row",
    },
    text:{
        fontSize:25,
        margin:20,

    },
    txt:{
        fontSize:25,
        margin:20,
        borderWidth:1,
        padding:10

    },
    grid:{
        flexDirection:'row',
    },
    grid2:{
        flexDirection:'row',
    },
    mohamad:{
        backgroundColor:"white",
        padding:20
    }
    

})