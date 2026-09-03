export function TwoTone({ text }) {
  const words = text.split(' ')
  const mid = Math.ceil(words.length / 2)
  const firstHalf = words.slice(0, mid).join(' ')
  const secondHalf = words.slice(mid).join(' ')

  return (
    <>
      {firstHalf}
      {secondHalf && ' '}
      <span className="text-brand-yellow">{secondHalf}</span>
    </>
  )
}