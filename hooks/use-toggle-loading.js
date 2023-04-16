import React from 'react'
import { useEffect } from 'react'

import { useAppContext } from '@/contexts/app-context'

const useToggleLoading = (comparation) => {
  const appContext = useAppContext()
  useEffect(() => {
    const isLoaded = comparation
    appContext?.setLoading(!isLoaded)
  }, [comparation])
}

export default useToggleLoading
