let UUID = 0
export default function UniqueID () {
  const getID = () => {
    UUID++
    return `idInput_${UUID}`
  }
  return {
    getID
  }
}
