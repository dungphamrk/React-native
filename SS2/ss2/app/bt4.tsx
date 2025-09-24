import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function bt4() {
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Điều khoản sử dụng</Text>

      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.content}>
          Chào mừng bạn đến với ứng dụng của chúng tôi. 
          Bằng cách truy cập hoặc sử dụng ứng dụng, bạn đồng ý bị 
          ràng buộc bởi các điều khoản và điều kiện sau đây.{"\n\n"}

          1. Chấp nhận Điều khoản{"\n"}
          Bằng việc sử dụng Dịch vụ, bạn xác nhận rằng bạn đã đọc, hiểu 
          và đồng ý tuân thủ tất cả các điều khoản này. Nếu bạn không đồng ý 
          với bất kỳ phần nào của các điều khoản, bạn không được phép truy cập 
          Dịch vụ.{"\n\n"}

          2. Quyền sử dụng Dịch vụ{"\n"}
          Chúng tôi có quyền sửa đổi hoặc thay thế các Điều khoản này bất kỳ lúc nào. 
          Bạn có trách nhiệm xem xét các thay đổi này. Nếu bạn tiếp tục sử dụng 
          ứng dụng sau khi có sửa đổi, nghĩa là bạn đã chấp nhận những thay đổi đó.{"\n\n"}

          3. Trách nhiệm của người dùng{"\n"}
          Bạn đồng ý không sử dụng dịch vụ cho các mục đích bất hợp pháp hoặc trái 
          quy định pháp luật hiện hành. Bạn sẽ chịu trách nhiệm cho toàn bộ nội dung 
          bạn đăng tải hoặc chia sẻ thông qua ứng dụng.{"\n\n"}

          Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#000',
  },
  scrollContainer: {
    flex: 1,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});
