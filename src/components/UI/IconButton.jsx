import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function IconButton({ icon, size, color, whenPressed }) {
  return (
    <Pressable
      onPress={whenPressed}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  icon: {
    fontSize: 36,
  },
  pressed: {
    opacity: 0.5,
    color: 'gray',
  },
});
