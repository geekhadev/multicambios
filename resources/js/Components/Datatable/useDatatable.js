import { router } from '@inertiajs/react'

export const useSearchAndSort = () => {
  const url = window.location.search
  const urlParams = new URLSearchParams(url)
  const search = urlParams.get('search') || ''
  const sort = urlParams.get('sort') || ''
  const direction = urlParams.get('direction') || 'asc'

  const handleSearch = (e) => {
    const inputSearch = e.target.value

    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    params.set('page', '1')
    params.set('search', inputSearch)

    if (inputSearch === '') {
      params.delete('search')
    }

    const newUrl = url.pathname + '?' + params.toString()
    router.replace(newUrl)
  }

  const handleSort = (field) => {
    const newDirection = direction === 'asc' ? 'desc' : 'asc'

    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    params.set('page', '1')
    params.set('sort', field)
    params.set('direction', newDirection)

    const newUrl = url.pathname + '?' + params.toString()
    router.replace(newUrl)
  }

  return { search, sort, direction, handleSearch, handleSort }
}
