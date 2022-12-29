// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage, ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  ...JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG)
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

const refImage = ref(storage, '/')
// get all files from storage
export const allList = listAll(refImage)

// get all files url from storage
const image = (name) => getDownloadURL(ref(storage, `/${name}`))
  .then((url) => {
    return url
  })
  .catch((error) => {
    // Handle any errors
    console.log(error)
  })

export const getUrlByName = async (name) => {
  if (name === '') return

  const url = await image(name)
  return url
}

// add new file to storage
export const addFile = async (blob, internalID, type) => {
  const spaceRef = ref(storage, `tesoreria/${internalID}/${type}`)
  return uploadBytes(spaceRef, blob)
    .then((snapshot) => {
      if (snapshot) {
        return getDownloadURL(ref(storage, `tesoreria/${internalID}/${type}`))
          .then(url => url)
      }
    })
}
