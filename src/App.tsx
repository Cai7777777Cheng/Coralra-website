const pdfUrl = `${import.meta.env.BASE_URL}coralra.pdf`
const personalSite = 'https://cai7777777cheng.github.io/Personal-Website/'

export default function App() {
  return (
    <div className="page">
      <a className="personal" href={personalSite}>
        Personal site
      </a>
      <iframe className="document" title="Coralra" src={pdfUrl} />
    </div>
  )
}
