import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


type Props = {
    name: string;  
    onRemove: () => void;
    onSelect: () => void; 
    selected: boolean; 
}

export function Task({ name, onRemove, onSelect, selected }: Props) {
    return (
        <View style={selected ? styles.selected : styles.container}>
            <TouchableOpacity style={styles.select} onPress={onSelect}>
                <Text style={styles.selectText}>{selected?<FontAwesome size={32} name='check-circle-o' />:'O'}</Text>
            </TouchableOpacity>
            <Text style={selected ? styles.nameCheck : styles.name}>{name}</Text>
            <TouchableOpacity style={styles.remove} onPress={onRemove}>
                <Text style={styles.removeText}>
                    <Ionicons size={20} name='trash-outline' />
                </Text>
            </TouchableOpacity>
        </View>
    );
}
