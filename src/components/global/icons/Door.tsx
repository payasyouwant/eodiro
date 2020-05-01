import { FillableIcon } from '@/types'

const Door: FillableIcon = ({ fill, size = 128, className }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M81.3164 18H47L46.779 18C45.5766 17.9996 44.1935 17.9991 42.9831 18.098C41.5928 18.2116 39.6591 18.4992 37.6441 19.5259C35.0099 20.8681 32.8681 23.0099 31.5259 25.6441C30.4992 27.6591 30.2116 29.5928 30.098 30.9831C29.9991 32.1935 29.9996 33.5766 30 34.779L30 35V94L30 94.221C29.9996 95.4234 29.9991 96.8065 30.098 98.0169C30.2116 99.4072 30.4992 101.341 31.5259 103.356C32.8681 105.99 35.0099 108.132 37.6441 109.474C39.6591 110.501 41.5928 110.788 42.9831 110.902C44.1935 111.001 45.5766 111 46.7791 111L47 111H81.3165L81.5374 111C82.7398 111 84.1229 111.001 85.3333 110.902C86.7237 110.788 88.6573 110.501 90.6723 109.474C93.3066 108.132 95.4483 105.99 96.7905 103.356C97.8172 101.341 98.1049 99.4072 98.2184 98.0169C98.3173 96.8065 98.3169 95.4235 98.3165 94.2211V94.221L98.3165 94V35L98.3165 34.779V34.7789C98.3169 33.5765 98.3173 32.1935 98.2184 30.9831C98.1049 29.5928 97.8172 27.6591 96.7905 25.6441C95.4483 23.0099 93.3066 20.8681 90.6723 19.5259C88.6573 18.4992 86.7237 18.2116 85.3333 18.098C84.1229 17.9991 82.7399 17.9996 81.5374 18L81.3164 18ZM39 35C39 32.1997 39 30.7996 39.545 29.73C40.0243 28.7892 40.7892 28.0243 41.73 27.545C42.7996 27 44.1997 27 47 27H47L57.038 27V79.2382C57.038 80.9453 57.038 81.7989 57.2888 82.5607C57.5108 83.2347 57.8737 83.8537 58.3533 84.3766C58.8955 84.9677 59.6402 85.3847 61.1297 86.2186L87.4067 100.931C87.1523 101.131 86.8778 101.307 86.5864 101.455C85.5168 102 84.1167 102 81.3165 102H47C44.1997 102 42.7996 102 41.73 101.455C40.7892 100.976 40.0243 100.211 39.545 99.27C39 98.2004 39 96.8003 39 94V35Z"
        fill={fill}
        className={fill || 'svg-bg'}
      />
    </svg>
  )
}

export default Door
