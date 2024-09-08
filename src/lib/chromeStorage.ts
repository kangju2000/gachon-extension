import type { ActivityType } from '@/types'

export interface StorageData {
  courses: { id: string; title: string }[]
  activities: ActivityType[]
  updateAt: string
  settings: {
    refreshTime: number
    'trigger-bg-image': string
  }
}

async function getStorageData<T extends keyof StorageData>(key: T): Promise<StorageData[T]> {
  return new Promise(resolve => {
    chrome.storage.local.get(key, result => {
      resolve(result[key] as StorageData[T])
    })
  })
}

async function setStorageData<T extends keyof StorageData>(key: T, value: StorageData[T]): Promise<void> {
  return new Promise(resolve => {
    chrome.storage.local.set({ [key]: value }, resolve)
  })
}

async function setStorageDataPartial(value: Partial<StorageData>): Promise<void> {
  return new Promise(resolve => {
    chrome.storage.local.set(value, resolve)
  })
}

async function removeStorageData(key: keyof StorageData): Promise<void> {
  return new Promise(resolve => {
    chrome.storage.local.remove(key, resolve)
  })
}

async function clearStorageData(): Promise<void> {
  return new Promise(resolve => {
    chrome.storage.local.clear(resolve)
  })
}

async function getAllStorageData(): Promise<Partial<StorageData>> {
  return new Promise(resolve => {
    chrome.storage.local.get(null, result => {
      resolve(result as Partial<StorageData>)
    })
  })
}

export { getStorageData, setStorageData, setStorageDataPartial, removeStorageData, clearStorageData, getAllStorageData }
