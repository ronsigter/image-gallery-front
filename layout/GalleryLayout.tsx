import { Box, Container, Text } from '@chakra-ui/react'

type GalleryLayoutProps = {
  pageTitle: string
  children: React.ReactElement
}

export const GalleryLayout: React.FC<GalleryLayoutProps> = ({
  pageTitle,
  children,
}) => {
  return (
    <Container maxW='1423px'>
      <Text fontWeight='bold' py='10' fontSize='3xl'>
        {pageTitle}
      </Text>
      <Box as='main'>{children}</Box>
    </Container>
  )
}
