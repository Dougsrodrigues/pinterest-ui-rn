import { View, Image, Text } from 'react-native'
import { PostProps } from './post'
import { styles } from './styles'
import { Feather } from '@expo/vector-icons'
import { theme } from '@/theme'
import { useEffect, useState } from 'react'

export function Post({ ...post }: PostProps) {
  const [aspectRatio, setAspectRatio] = useState(1)

  useEffect(() => {
    if (post.image) {
      Image.getSize(post.image, (width, height) => {
        setAspectRatio(width / height)
      })
    }
  }, [post])

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: post.image }}
        style={[styles.image, { aspectRatio }]}
        alt="image"
      />
      <View style={styles.footer}>
        <Text style={styles.title}>{post.title}</Text>
        <Feather name="more-horizontal" size={16} color={theme.colors.white} />
      </View>
    </View>
  )
}
