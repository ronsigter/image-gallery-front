import { Stack, Text } from '@chakra-ui/react'
import { Photos } from 'components'

export const ViewAlbum: React.FC = () => {
  return (
    <Stack spacing='4'>
      <Text maxW='500px' fontSize='xs' fontWeight='medium'>
        Have you heard of the critically acclaimed MMORPG Final Fantasy XIV?
        With an expanded free trial which you can play through the entirety of A
        Realm Reborn and the award winning Heavensward expansion up to level 60
        for free with no restrictions on playtime.
      </Text>
      <Photos />
    </Stack>
  )
}
