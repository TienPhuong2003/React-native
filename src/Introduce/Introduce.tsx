import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Introduce: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 10000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={require('../../assets/avatar.jpg')} style={styles.avatar} />
      </View>
      <Text style={styles.name}>Trần Tiến Phương</Text>
      <Text style={styles.position}>Dev Mobile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1e1e2d' },
  avatarContainer: { width: 160, height: 160, borderRadius: 80, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' },
  avatar: { width: '100%', height: '100%', borderRadius: 80 },
  name: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginTop: 20 },
  position: { fontSize: 18, color: '#ddd', marginTop: 5 },
});

export default Introduce;