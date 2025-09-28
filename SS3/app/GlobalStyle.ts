import {StyleSheet} from 'react-native';
export const lightColors = {
  background: '#FFFFFF',
  text: '#000000',
  card: '#F5F5F5',
};

export const darkColors = {
  background: '#000000',
  text: '#FFFFFF',
  card: '#1E1E1E',
};


export const COLORS = {
  primary: '#007AFF',      
  secondary: '#FF9500',    
  text: '#333333',
  background: '#FFFFFF',
  error: '#FF3B30',
  success: '#4CD964',
  border: '#E5E5E5',
};

export const FONT_SIZES = {
  small: 12,
  medium: 16,
  large: 20,
  title: 24,
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const CONTAINER_STYLES = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.md,
  },
  centered: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.md,
  },
});
