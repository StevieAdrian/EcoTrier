import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

interface ActionButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
}

export default function ActionButton({ children, onPress, disabled = false }: ActionButtonProps) {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      disabled={disabled}
      style={{ 
        backgroundColor: disabled ? '#ccc' : 'black',
        padding: 15,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
        marginVertical: 10
      }}
    >
      {disabled ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={{ color: 'white', fontWeight: 'bold' }}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}