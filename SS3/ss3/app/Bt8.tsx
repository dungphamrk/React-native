import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Bt8 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/800/400' }}
        style={styles.coverImage}
      />

      <Text style={styles.title}>
        React Native: Xây dựng ứng dụng di động đa nền tảng
      </Text>

      <View style={styles.authorContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.authorName}>Sơn Nguyễn</Text>
          <Text style={styles.postDate}>Đăng ngày: 23/09/2025</Text>
        </View>
      </View>

      <Text style={styles.content}>
        React Native đã cách mạng hóa lĩnh vực phát triển ứng dụng di động bằng
        cách cho phép các nhà phát triển xây dựng các ứng dụng gốc cho cả iOS
        và Android từ một cơ sở mã duy nhất. Được phát triển bởi Facebook,
        framework này sử dụng thư viện React, một trong những thư viện JavaScript
        phổ biến nhất để xây dựng giao diện người dùng.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  coverImage: {
    width: width - 32, 
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'CustomFont-Bold', 
    marginBottom: 12,
    color: '#222',
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  authorName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  postDate: {
    fontSize: 12,
    color: '#777',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
    fontFamily: 'CustomFont-Regular', 
  },
});

export default Bt8;
