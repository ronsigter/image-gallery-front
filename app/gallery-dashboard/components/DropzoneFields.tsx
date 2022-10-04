import { Box, Center, Image, Input, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Control, Controller } from 'react-hook-form'

export const DropzoneFields: React.FC<{
  name: string
  control: Control<any>
}> = ({ name, control, ...rest }) => {
  return (
    <Controller
      render={({ field: { onChange } }) => (
        <Dropzone
          onChange={(e: any) => onChange(e.target.files[0])}
          {...rest}
        />
      )}
      name={name}
      control={control}
      defaultValue=''
    />
  )
}

type DragNDropFile = File & { preview: string }

const Dropzone: React.FC<any> = ({
  onChange,
}: {
  onChange: (...event: any[]) => void
}) => {
  const [files, setFiles] = useState<DragNDropFile[]>([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [files])

  return (
    <Center
      w='100%'
      h='590px'
      bgColor='#D9D9D9'
      borderRadius='xl'
      overflow='hidden'
      cursor='pointer'
      {...getRootProps()}
    >
      <Input {...getInputProps({ onChange })} />
      {files.length === 0 ? (
        <Text>Drag and drop some file here, or click to select a file</Text>
      ) : (
        <Box p='1'>
          <Image
            objectFit='cover'
            src={files?.[0]?.preview}
            alt={files?.[0]?.name}
          />
        </Box>
      )}
    </Center>
  )
}
