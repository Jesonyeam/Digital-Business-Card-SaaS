import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SampleCard } from '@/constants/sample-card';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function ShareScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.header}>
          <ThemedText type="title" style={styles.centerText}>
            Share
          </ThemedText>
          <ThemedText themeColor="textSecondary" style={styles.centerText}>
            Let others scan this code to save your card instantly.
          </ThemedText>
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.qrPlaceholder}>
          <ThemedText type="code" themeColor="textSecondary">
            QR CODE
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.footer}>
          <ThemedText type="smallBold">{SampleCard.fullName}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {SampleCard.jobTitle} · {SampleCard.company}
          </ThemedText>
        </ThemedView>
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
    gap: Spacing.five,
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
  qrPlaceholder: {
    width: 220,
    height: 220,
    borderRadius: Spacing.four,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    alignItems: 'center',
    gap: Spacing.half,
  },
});
