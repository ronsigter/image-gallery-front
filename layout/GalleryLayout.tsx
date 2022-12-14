import NextLink from 'next/link'
import { Box, Container, Link, Stack, Text } from '@chakra-ui/react'

type GalleryLayoutProps = {
  pageTitle: string
  children: React.ReactElement
  backPath?: {
    path: string
    label: string
  }
}

export const GalleryLayout: React.FC<GalleryLayoutProps> = ({
  pageTitle,
  children,
  backPath,
}) => {
  return (
    <Container maxW='1423px' p={{ base: '4', md: '10' }}>
      <Stack spacing='6' pb='9'>
        {backPath && (
          <Box>
            <NextLink href={backPath.path} passHref>
              <Link fontWeight='semibold' fontSize='x-small' role='link'>
                {backPath.label}
              </Link>
            </NextLink>
          </Box>
        )}
        <Text fontWeight='bold' fontSize='3xl'>
          {pageTitle}
        </Text>
      </Stack>
      <Box as='main'>{children}</Box>
    </Container>
  )
}
