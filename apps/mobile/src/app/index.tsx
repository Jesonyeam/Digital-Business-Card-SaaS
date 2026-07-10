import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CardPreview } from '@/components/card-preview';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SampleCard } from '@/constants/sample-card';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function MyCardScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.header}>
          <ThemedText type="title" style={styles.centerText}>
            My Card
          </ThemedText>
          <ThemedText themeColor="textSecondary" style={styles.centerText}>
            This is how your digital business card looks to others.
          </ThemedText>
        </ThemedView>

        <CardPreview card={SampleCard} />

        <ThemedText type="small" themeColor="textSecondary" style={styles.centerText}>
          Editing, themes, and sync are coming soon.
        </ThemedText>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.four,
    paddingHorizontal: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  header: {
    alignItems: 'center',
    gap: Spacing.two,
  },
  centerText: {
    textAlign: 'center',
  },
});
