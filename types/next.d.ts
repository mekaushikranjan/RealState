import { Property } from '@/lib/properties'

declare module 'next' {
  interface PageProps {
    params: {
      id: string
    }
    searchParams?: { [key: string]: string | string[] | undefined }
  }
} 