import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Task } from '../../components/Task';

export function Home() {
  const [tasks, setTasks] = useState<{ name: string; completed: boolean }[]>([]); 
  const [isFocused, setIsFocused] = useState(false); 
  const [task, setTask] = useState(''); 
  const [countCriada, setCountCriada] = useState(0);
  const [countConcluida, setCountConcluida] = useState(0);

  function handleTaskAdd() {
    if (!task.trim()) {
      return Alert.alert("Erro", "Digite uma tarefa!");
    }
    
    if (tasks.some(t => t.name === task)) {
      return Alert.alert("Tarefa existe", "Já existe esta tarefa!");
    }
    
    const newTask = { name: task, completed: false };
    setTasks(prevState => [...prevState, newTask]);
    setTask('');
    setCountCriada(prevState => prevState + 1);
  }

  function handleTaskSelect(name: string) {
    setTasks(prevTasks => {
      return prevTasks.map(task => 
        task.name === name 
          ? { ...task, completed: !task.completed } 
          : task
      );
    });
    setCountConcluida(prevCount => 
      tasks.find(task => task.name === name && !task.completed) ? prevCount + 1 : prevCount - 1
    );
  }

  function handleTaskRemove(name: string) {
    Alert.alert("Remover", `Remover a tarefa ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setTasks(prevStates => {
            const newTasks = prevStates.filter(task => task.name !== name);

            setCountCriada(newTasks.length); 
            const taskCompleted = prevStates.filter(task => task.name !== name && task.completed);
            setCountConcluida(taskCompleted.length); 
            return newTasks;
          });
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image style={styles.rocket} source={require("../../../assets/rocket.png")} />
        <Text style={styles.to}>to</Text>
        <Text style={styles.do}>do</Text>
      </View>

      <View style={styles.form}>
        <TextInput 
          style={[styles.input, isFocused && styles.inputFocused]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"gray"}
          onChangeText={setTask}
          value={task}
          onFocus={() => setIsFocused(true)} 
          onBlur={() => setIsFocused(false)}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Text style={styles.buttonText}>⊕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contTask}>
        <Text style={styles.criadas}>Criadas</Text>
        <Text style={styles.contador}>{countCriada}</Text>
        <Text style={styles.concluidas}>Concluídas</Text>
        <Text style={styles.contador}>{countConcluida}</Text>
      </View>

      <View style={styles.line} />

      <FlatList
        data={tasks}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <Task 
            name={item.name} 
            onSelect={() => handleTaskSelect(item.name)}
            onRemove={() => handleTaskRemove(item.name)}
            selected={item.completed}
          />
        )}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image style={styles.clipboard} source={require("../../../assets/Clipboard.png")} />
            <Text style={styles.listEmptyText}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.listEmptyText1}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        )}
      />
    </View>
  );
}