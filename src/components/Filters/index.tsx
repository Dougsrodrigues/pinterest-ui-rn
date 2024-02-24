import { FlatList } from 'react-native'
import { Filter } from '@/components/Filter'
import { styles } from './styles'
import { FiltersProps } from './filters'

export function Filters({ filter, filters, onChange }: FiltersProps) {
  return (
    <FlatList
      keyExtractor={(item) => item}
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={filters}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected={item === filter}
          onPress={() => onChange(item)}
        />
      )}
      style={styles.list}
      contentContainerStyle={styles.content}
    />
  )
}
