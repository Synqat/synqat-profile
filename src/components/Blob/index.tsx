import { Icon, forwardRef, createIcon } from '@chakra-ui/react'

export interface BlobProps {
  version: keyof typeof Blobs
}

const Blobs = {
  0: createIcon({
    viewBox: '0 0 200 200',
    path: (
      <path
        fill="currentColor"
        d="M37.9,-51.4C44.4,-39.6,41.8,-23.3,47.3,-6.3C52.8,10.7,66.3,28.4,64.2,41.8C62.1,55.2,44.4,64.2,25.8,71C7.2,77.8,-12.2,82.4,-24.9,74.9C-37.5,67.5,-43.4,48,-52.8,30.9C-62.2,13.8,-75.1,-0.8,-73,-12.8C-70.8,-24.8,-53.7,-34.2,-39,-44.5C-24.3,-54.9,-12.2,-66.3,1.7,-68.4C15.7,-70.5,31.3,-63.2,37.9,-51.4Z"
        transform="translate(100 100)"
      />
    ),
  }),
  1: createIcon({
    viewBox: '0 0 200 200',
    path: (
      <path
        fill="currentColor"
        d="M37.5,-46C47.4,-36.4,53.4,-23.4,59.5,-7.7C65.6,8,71.7,26.5,67.2,43.2C62.8,59.9,47.8,74.9,32.5,73.6C17.3,72.3,1.9,54.7,-10,43.5C-22,32.2,-30.5,27.3,-34.7,20C-39,12.7,-39.1,2.9,-40.5,-10.2C-41.8,-23.3,-44.5,-39.7,-37.9,-49.9C-31.4,-60.1,-15.7,-64.1,-0.9,-63C13.8,-61.9,27.6,-55.6,37.5,-46Z"
        transform="translate(100 100)"
      />
    ),
  }),
  2: createIcon({
    viewBox: '0 0 200 200',
    path: (
      <path
        fill="currentColor"
        d="M35.2,-40.9C49.2,-30.3,66.4,-22.5,70.3,-10.8C74.2,0.8,64.8,16.4,53.6,26.5C42.5,36.6,29.6,41.3,16.6,46.3C3.6,51.3,-9.5,56.6,-26,56.9C-42.6,57.2,-62.6,52.5,-73.8,39.5C-85.1,26.5,-87.5,5.3,-80.1,-10.2C-72.6,-25.6,-55.3,-35.4,-40.3,-45.8C-25.3,-56.2,-12.6,-67.2,-1,-66C10.6,-64.8,21.3,-51.4,35.2,-40.9Z"
        transform="translate(100 100)"
      />
    ),
  }),
  3: createIcon({
    viewBox: '0 0 200 200',
    path: (
      <path
        fill="currentColor"
        d="M34.8,-36.8C50.6,-28.3,72.5,-22.5,78.9,-10.4C85.3,1.8,76.1,20.2,63.2,30.8C50.3,41.4,33.7,44.2,19.4,46.5C5,48.8,-7,50.6,-21.8,49.7C-36.7,48.8,-54.2,45.1,-58.4,35.1C-62.5,25,-53.3,8.6,-51.9,-10.9C-50.5,-30.3,-56.9,-52.9,-49.6,-62.9C-42.2,-72.9,-21.1,-70.2,-5.8,-63.3C9.5,-56.4,19.1,-45.3,34.8,-36.8Z"
        transform="translate(100 100)"
      />
    ),
  }),
  4: createIcon({
    viewBox: '0 0 200 200',
    path: (
      <path
        fill="currentColor"
        d="M41.4,-53.8C48.3,-43.5,44.8,-25.4,48.3,-8.1C51.9,9.2,62.5,25.7,61,41.6C59.5,57.5,45.7,72.8,28.1,80.8C10.4,88.8,-11.3,89.7,-29.7,82.5C-48.1,75.4,-63.2,60.3,-65.5,43.9C-67.7,27.4,-57,9.6,-50,-5.1C-43,-19.9,-39.7,-31.6,-31.9,-41.7C-24.2,-51.9,-12.1,-60.4,2.6,-63.5C17.2,-66.6,34.5,-64.1,41.4,-53.8Z"
        transform="translate(100 100)"
      />
    ),
  }),
  5: createIcon({
    viewBox: '0 0 200 200',
    path: (
      <path
        fill="currentColor"
        d="M38.6,-52.8C46.1,-39.6,45.7,-23.8,46.7,-9.5C47.7,4.8,50.1,17.5,47.8,33.3C45.5,49,38.5,67.7,24.1,78.1C9.7,88.4,-12,90.5,-24.9,80.5C-37.9,70.6,-42.1,48.7,-46.9,31.4C-51.7,14.1,-57.2,1.5,-56.8,-11.7C-56.5,-24.9,-50.3,-38.8,-39.9,-51.4C-29.5,-64.1,-14.7,-75.5,0.4,-76C15.5,-76.5,31,-65.9,38.6,-52.8Z"
        transform="translate(100 100)"
      />
    ),
  }),
  6: createIcon({
    viewBox: '0 0 200 200',
    path: (
      <path
        fill="currentColor"
        d="M54.3,-62.2C70.4,-51.2,83.6,-34.1,82.9,-17.7C82.1,-1.2,67.5,14.6,55.6,29.3C43.8,44.1,34.9,57.6,23.6,59.4C12.3,61.1,-1.3,51,-16.6,45.5C-31.9,40,-48.9,39,-60.2,29.8C-71.5,20.5,-77.2,2.9,-74.2,-13C-71.3,-28.9,-59.8,-43.2,-46,-54.7C-32.2,-66.2,-16.1,-74.7,1.5,-76.5C19.1,-78.3,38.2,-73.3,54.3,-62.2Z"
        transform="translate(100 100)"
      />
    ),
  }),
  7: createIcon({
    viewBox: '0 0 200 200',
    path: (
      <path
        fill="currentColor"
        d="M43.2,-48.8C56.4,-40.4,67.9,-27.2,65.9,-15.1C63.8,-3,48.3,8,37.8,17.7C27.2,27.4,21.7,35.9,12.4,43.1C3.2,50.4,-9.8,56.5,-26.3,57.1C-42.8,57.7,-62.8,52.7,-69.4,40.5C-76,28.2,-69.3,8.6,-64.9,-10.6C-60.5,-29.8,-58.4,-48.5,-48,-57.4C-37.6,-66.2,-18.8,-65.2,-1.9,-62.9C15,-60.7,30,-57.1,43.2,-48.8Z"
        transform="translate(100 100)"
      />
    ),
  }),
  8: createIcon({
    viewBox: '0 0 200 200',
    path: (
      <path
        fill="currentColor"
        d="M48.3,-50.7C63.9,-44.4,78.9,-30.5,76.2,-17.6C73.6,-4.6,53.4,7.3,40,16.1C26.6,25,19.9,30.7,10.6,37.8C1.4,44.9,-10.6,53.4,-27.1,55.5C-43.5,57.7,-64.6,53.6,-74.3,40.9C-84.1,28.2,-82.6,6.9,-74.6,-8.8C-66.7,-24.6,-52.3,-34.9,-38.8,-41.6C-25.3,-48.3,-12.6,-51.4,1.8,-53.6C16.3,-55.8,32.6,-57.1,48.3,-50.7Z"
        transform="translate(100 100)"
      />
    ),
  }),
  9: createIcon({
    viewBox: '0 0 200 200',
    path: (
      <path
        fill="currentColor"
        d="M47.9,-53.2C61.8,-45.3,72.7,-30,75.5,-13.5C78.2,3.1,72.8,21,63,34.9C53.3,48.9,39.2,58.8,22.7,66.7C6.3,74.5,-12.5,80.2,-28.6,75.6C-44.6,71,-57.9,56.1,-62,40.1C-66.2,24.1,-61.1,7.1,-56.5,-8.4C-51.9,-23.9,-47.8,-38,-38.5,-46.7C-29.1,-55.3,-14.6,-58.6,1.2,-60C17,-61.5,33.9,-61.1,47.9,-53.2Z"
        transform="translate(100 100)"
      />
    ),
  }),
  10: createIcon({
    viewBox: '0 0 200 200',
    path: (
      <path
        fill="currentColor"
        d="M50.8,-60C60.3,-52.5,58.7,-31.3,61.8,-11.3C64.8,8.8,72.6,27.6,67.5,41.3C62.4,55,44.3,63.6,28.7,61.9C13.1,60.2,0,48.2,-15.6,42.6C-31.2,37.1,-49.3,38,-57.3,30.2C-65.3,22.4,-63.3,5.8,-60.2,-10.4C-57.1,-26.6,-52.9,-42.4,-42.8,-49.8C-32.6,-57.1,-16.3,-56.1,2.2,-58.7C20.6,-61.3,41.3,-67.5,50.8,-60Z"
        transform="translate(100 100)"
      />
    ),
  }),
}

export const Blob = forwardRef<BlobProps, typeof Icon>(({ version, color = 'brand.primary.100', ...props }, ref) => {
  const SelectedBlob = Blobs[version]
  return <SelectedBlob color={color} {...props} ref={ref} />
})
