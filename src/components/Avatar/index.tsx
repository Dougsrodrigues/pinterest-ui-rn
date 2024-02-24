import { Image, ImageProps } from 'react-native'
import { styles } from './styles'

export function Avatar({ selected, ...rest }: AvatarProps & ImageProps) {
  return (
    <Image
      {...rest}
      style={[styles.image, selected && styles.selected]}
      alt="Profile image"
    />
  )
}
