// eslint-disable-next-line react/prop-types
export default function Increment({incrementCounter}) {
  return (
    <button
        onClick={() => {
          incrementCounter();
        }}
      >
        Artir
      </button>
  )
}
