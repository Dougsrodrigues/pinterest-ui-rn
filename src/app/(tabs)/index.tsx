import { Filters } from '@/components/Filters'
import { theme } from '@/theme'
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { FILTERS } from '@/utils/filters'
import { Posts } from '@/components/Posts'
import { POSTS } from '@/utils/posts'

export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0])
  return (
    <View style={styles.container}>
      <Filters filters={FILTERS} filter={filter} onChange={setFilter} />
      <Posts posts={POSTS} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 42,
    backgroundColor: theme.colors.black,
  },
})
