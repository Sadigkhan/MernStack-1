// eslint-disable-next-line react/prop-types
export default function Decrement({decrementCounter}) {
  return (
    <button
        onClick={() => {
          decrementCounter();
        }}
      >
        Azalt 
      </button>
  )
}
