import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'
import '../css/App.css'

function App() {
  return (
    <>
      {/* Logo Row */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Title */}
      <h1 className="font-satoshi text-center mt-6">
        Hi Wei Keat !!!
      </h1>

      {/* Description */}
      <div className="card text-center">
        <p className="font-satoshi italic">
          React + Tailwind CSS Demo By Yue Qin &amp; Jie Hui
        </p>
      </div>

      {/* Footer Text */}
      <p className="read-the-docs font-satoshi text-center">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App