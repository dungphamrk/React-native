import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: Date;
  content: string;
  category: string;
  readTime: number;
}

const initialPosts: BlogPost[] = [
  {
    id: "1",
    title: "React Native là gì?",
    author: "John Doe",
    date: new Date("2021-09-01"),
    content: "Giới thiệu cơ bản về React Native.",
    category: "Lập trình",
    readTime: 5,
  },
  {
    id: "2",
    title: "Làm quen với Redux",
    author: "Jane Smith",
    date: new Date("2021-09-05"),
    content: "Hướng dẫn sử dụng Redux trong quản lý state.",
    category: "Lập trình",
    readTime: 8,
  },
  {
    id: "3",
    title: "Giới thiệu về JavaScript",
    author: "Alice Johnson",
    date: new Date("2021-09-10"),
    content: "JavaScript và ứng dụng trong phát triển web.",
    category: "Ngôn ngữ",
    readTime: 6,
  },
  {
    id: "4",
    title: "Hướng dẫn CSS Flexbox",
    author: "Bob Brown",
    date: new Date("2021-09-12"),
    content: "Sử dụng CSS Flexbox để bố cục layout.",
    category: "Thiết kế",
    readTime: 7,
  },
  {
    id: "5",
    title: "Học lập trình web từ đâu?",
    author: "Charlie Davis",
    date: new Date("2021-09-15"),
    content: "Gợi ý lộ trình học lập trình web.",
    category: "Lộ trình",
    readTime: 9,
  },
  {
    id: "6",
    title: "Bảo mật ứng dụng di động",
    author: "Vũ Thị F",
    date: new Date("2021-09-20"),
    content: "Các kỹ thuật bảo mật cơ bản.",
    category: "Bảo mật",
    readTime: 10,
  }
];

const additionalPosts: BlogPost[] = [
  {
    id: "7",
    title: "Bảo mật ứng dụng di động",
    author: "Vũ Thị F",
    date: new Date("2021-09-20"),
    content: "Các kỹ thuật bảo mật cơ bản.",
    category: "Bảo mật",
    readTime: 10,
  },
  {
    id: "8",
    title: "Bảo mật ứng dụng di động",
    author: "Vũ Thị F",
    date: new Date("2021-09-20"),
    content: "Các kỹ thuật bảo mật cơ bản.",
    category: "Bảo mật",
    readTime: 10,
  },
  {
    id: "9",
    title: "Bảo mật ứng dụng di động",
    author: "Vũ Thị F",
    date: new Date("2021-09-20"),
    content: "Các kỹ thuật bảo mật cơ bản.",
    category: "Bảo mật",
    readTime: 10,
  }
];

const Bt8 = () => {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [loading, setLoading] = useState(false);
  const [loadedMore, setLoadedMore] = useState(false);

  const formatDate = useCallback((date: Date) => {
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }, []);

  const handleLoadMore = useCallback(() => {
    if (loading || loadedMore) return;
    setLoading(true);
    setTimeout(() => {
      setPosts((prev) => [...prev, ...additionalPosts]);
      setLoading(false);
      setLoadedMore(true);
    }, 2000);
  }, [loading, loadedMore]);

  const renderItem = ({ item }: { item: BlogPost }) => (
    <View style={styles.postCard}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postAuthor}>Tác giả: {item.author}</Text>
      <Text style={styles.postDate}>Ngày đăng: {formatDate(item.date)}</Text>

      <View style={styles.badgeRow}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.category}</Text>
        </View>
        <Text style={styles.readTime}>{item.readTime} phút đọc</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Danh sách bài viết</Text>
        <Text style={styles.headerSubtitle}>
          Số lượng bài viết: {posts.length}
        </Text>
      </View>

      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          loading ? (
            <View style={styles.footer}>
              <ActivityIndicator size="small" color="#4CAF50" />
              <Text style={{ color: "#4CAF50", marginTop: 5 }}>
                Đang tải thêm...
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    backgroundColor: "#4CAF50",
    padding: 15,
    margin: 10,
    borderRadius: 6,
  },
  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  headerSubtitle: { color: "#fff", marginTop: 4 },
  postCard: {
    backgroundColor: "#fff",
    padding: 12,
    marginHorizontal: 10,
    marginVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  postTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 6 },
  postAuthor: { fontSize: 14, color: "#388E3C" },
  postDate: { fontSize: 12, color: "#777" },
  badgeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  badge: {
    backgroundColor: "#e8f5e9",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: { fontSize: 12, color: "#4CAF50", fontWeight: "600" },
  readTime: { fontSize: 12, color: "#555" },
  footer: { alignItems: "center", padding: 15 },
});

export default Bt8;
