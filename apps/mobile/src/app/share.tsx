import { useMemo, useState } from 'react';
import { Platform, Pressable, Share, StyleSheet, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SampleCard } from '@/constants/sample-card';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { buildVCard } from '@/lib/vcard';

const QRSize = 208;

export default function ShareScreen() {
  const theme = useTheme();
  const card = SampleCard;
  const vcard = useMemo(() => buildVCard(card), [card]);
  const [feedback, setFeedback] = useState<string | null>(null);

  const shareMessage = [
    `${card.fullName} — ${card.jobTitle}, ${card.company}`,
    card.email,
    card.phone,
    `https://${card.website}`,
  ].join('\n');

  const onShare = async () => {
    try {
      // RN's navigator typing omits web APIs, so widen it for the web path.
      const webNavigator =
        Platform.OS === 'web'
          ? (navigator as unknown as {
              share?: (data: { text: string }) => Promise<void>;
              clipboard?: { writeText: (text: string) => Promise<void> };
            })
          : undefined;
      if (webNavigator && !webNavigator.share && webNavigator.clipboard) {
        await webNavigator.clipboard.writeText(shareMessage);
        showFeedback('Copied to clipboard');
        return;
      }
      await Share.share({ message: shareMessage });
    } catch {
      // User dismissed the share sheet, or sharing is unavailable.
    }
  };

  const showFeedback = (message: string) => {
    setFeedback(message);
    setTimeout(() => setFeedback(null), 2000);
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.header}>
          <ThemedText type="subtitle" style={styles.centerText}>
            Share your card
          </ThemedText>
          <ThemedText themeColor="textSecondary" style={styles.centerText}>
            Point a phone camera at the code{'\n'}to save your contact instantly.
          </ThemedText>
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.qrCard}>
          {/* QR stays black-on-white in both themes for reliable scanning */}
          <View style={styles.qrTile}>
            <QRCode
              value={vcard}
              size={QRSize}
              backgroundColor="#ffffff"
              color="#000000"
              ecl="M"
            />
          </View>
          <ThemedView style={styles.qrCardFooter}>
            <ThemedText type="smallBold">{card.fullName}</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {card.jobTitle} · {card.company}
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <View style={styles.actions}>
          <ThemedText type="small" themeColor="textSecondary" style={styles.feedback}>
            {feedback ?? ' '}
          </ThemedText>
          <Pressable
            onPress={onShare}
            style={({ pressed }) => [
              styles.shareButton,
              { backgroundColor: theme.tint },
              pressed && styles.pressed,
            ]}>
            <ThemedText type="smallBold" style={{ color: theme.onTint }}>
              Share my card
            </ThemedText>
          </Pressable>
        </View>
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
    paddingTop: Spacing.four,
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
  qrCard: {
    alignItems: 'center',
    gap: Spacing.three,
    padding: Spacing.four,
    borderRadius: Spacing.five,
  },
  qrTile: {
    backgroundColor: '#ffffff',
    padding: Spacing.three,
    borderRadius: Spacing.four,
  },
  qrCardFooter: {
    alignItems: 'center',
    gap: Spacing.half,
    backgroundColor: 'transparent',
  },
  actions: {
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: Spacing.two,
  },
  feedback: {
    textAlign: 'center',
  },
  shareButton: {
    alignSelf: 'stretch',
    maxWidth: 400,
    width: '100%',
    alignItems: 'center',
    paddingVertical: Spacing.three,
    borderRadius: Spacing.five,
  },
  pressed: {
    opacity: 0.8,
  },
});
