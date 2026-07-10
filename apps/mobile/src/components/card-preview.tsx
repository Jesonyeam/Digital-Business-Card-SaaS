import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { BusinessCard } from '@/types/card';

export function CardPreview({ card }: { card: BusinessCard }) {
  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <ThemedView type="backgroundSelected" style={styles.avatar}>
        <ThemedText type="subtitle">{getInitials(card.fullName)}</ThemedText>
      </ThemedView>

      <ThemedText type="subtitle" style={styles.name}>
        {card.fullName}
      </ThemedText>
      <ThemedText themeColor="textSecondary" style={styles.centerText}>
        {card.jobTitle} · {card.company}
      </ThemedText>

      <ThemedView style={styles.contactRows}>
        <ContactRow label="Email" value={card.email} />
        <ContactRow label="Phone" value={card.phone} />
        <ContactRow label="Website" value={card.website} />
      </ThemedView>
    </ThemedView>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <ThemedView style={styles.contactRow}>
      <ThemedText type="small" themeColor="textSecondary">
        {label}
      </ThemedText>
      <ThemedText type="smallBold">{value}</ThemedText>
    </ThemedView>
  );
}

function getInitials(fullName: string) {
  return fullName
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'stretch',
    alignItems: 'center',
    gap: Spacing.two,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.five,
    borderRadius: Spacing.four,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.two,
  },
  name: {
    textAlign: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  contactRows: {
    alignSelf: 'stretch',
    gap: Spacing.two,
    marginTop: Spacing.three,
    backgroundColor: 'transparent',
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
